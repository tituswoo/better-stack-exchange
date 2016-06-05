require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')
require('./styles.css')

import ImageUploader from 'shared/ImageUploader'

// Hide the old markdown editor:
let oldEditor = document.querySelector('.wmd-container').parentNode
oldEditor.style.overflow = 'hidden'
oldEditor.style.height = 0

// Get the backing text area for the old markdown editor:
let oldEditorTextArea = oldEditor.querySelector('textarea')

// Prime the image uploader functionality:
const uploadImage = ImageUploader(oldEditorTextArea)

// Create container for the new markdown editor:
let editorContainer = document.createElement('div')
editorContainer.id = 'better-editor'

// Create backing textarea for the new markdown editor:
let editor = document.createElement('textarea')
oldEditor.parentNode.insertBefore(editorContainer, oldEditor.nextSibling)
editorContainer.appendChild(editor)

const config = {
  element: editor,
  toolbar: [
    'bold', 'italic', '|',
    'link', 'quote', 'code',
    {
      name: 'insert-image',
      className: 'fa fa-picture-o',
      title: 'Insert Image',
      action(editor) {
        uploadImage((imageUrl) => {
          const doc = editor.codemirror.getDoc()
          const selectedText = doc.getSelection() || 'alt'

          const mdImage = `![${selectedText}](${imageUrl})`
          doc.replaceSelection(mdImage, 'around')

          oldEditorTextArea.value = doc.getValue()
        })
      }
    },
    {
      name: 'snippet',
      action(editor) {
      },
      className: 'fa fa-file-code-o',
      title: 'Insert Snippet'
    }, '|',
    'ordered-list', 'unordered-list', '|',
    'preview', 'side-by-side', 'fullscreen'
  ],
  tabSize: 4,
  spellChecker: false,
  status: false,
  renderingConfig: {
    codeSyntaxHighlighting: true
  }
}

// Create the new markdown editor:
let newEditor = new SimpleMDE(config)
newEditor.codemirror.setOption('viewportMargin', Infinity)
newEditor.value(oldEditorTextArea.value)

// Updated the old markdown editor's backing textarea with
// the contents of the new markdown editor.
// This is how changes are saved when you add/update a question/answer.
newEditor.codemirror.on('change', (instance, changeObj) => {
  oldEditorTextArea.value = newEditor.value()
})
