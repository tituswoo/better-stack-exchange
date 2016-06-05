require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')
require('./styles.css')

import ImageUploader from 'shared/ImageUploader'

console.info('ENHANCING STACK EXCHANGE')

// Remove the awk gap between original editor and live preview
let gap = document.querySelector('.post-editor .fl')
gap.parentNode.removeChild(gap)

// Hide the original markdown previewer:
let mdPreview = document.querySelector('.wmd-preview')
mdPreview.style.display = 'none'

// Make a new editor:

let oldEditor = document.querySelector('.wmd-container').parentNode
oldEditor.style.overflow = 'hidden'
oldEditor.style.height = 0
let oldEditorTextArea = oldEditor.querySelector('textarea')

let editorContainer = document.createElement('div')
editorContainer.id = 'better-editor'

let editor = document.createElement('textarea')
oldEditor.parentNode.insertBefore(editorContainer, oldEditor.nextSibling)
editorContainer.appendChild(editor)

const uploadImage = ImageUploader(oldEditorTextArea)

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

          const newText = `![${selectedText}](${imageUrl})`
          doc.replaceSelection(newText, 'around')

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

let newEditor = new SimpleMDE(config)
newEditor.codemirror.setOption('viewportMargin', Infinity)
newEditor.value(oldEditorTextArea.value)

newEditor.codemirror.on('change', (instance, changeObj) => {
  oldEditorTextArea.value = newEditor.value()
})
