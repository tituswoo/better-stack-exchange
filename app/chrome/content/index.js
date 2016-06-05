require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')
require('./styles.css')

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

const config = {
  element: editor,
  toolbar: [
    'bold', 'italic', '|',
    'link', 'quote', 'code',
    {
      name: 'upload-image',
      action(editor) {
        oldEditorTextArea.value = ''
        document.querySelector('#wmd-image-button-279919').click()
        console.log('clicked...')
        let check = setInterval(() => {
          let modal = document.querySelector('.modal.image-upload')
          if (modal === null) {
            clearInterval(check)
            let newText = oldEditorTextArea.value.split(/\n/).pop()
            const startIndex = newText.indexOf('http')
            const url = newText.substr(startIndex)

            let doc = editor.codemirror.getDoc()
            const selectedText = doc.getSelection() || 'alt'

            newText = `![${selectedText}](${url})`
            doc.replaceSelection(newText, 'around')

            oldEditorTextArea.value = doc.getValue()
          }
        }, 300)
      },
      className: 'fa fa-picture-o',
      title: 'Upload Picture'
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

newEditor.value('Aloha my friends. \`code in here\`')

newEditor.codemirror.setOption('viewportMargin', Infinity)

newEditor.value(oldEditorTextArea.value)

newEditor.codemirror.on('change', (instance, changeObj) => {
  oldEditorTextArea.value = newEditor.value()
})
