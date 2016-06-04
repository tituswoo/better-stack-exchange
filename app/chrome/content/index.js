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
oldEditor.style.display = 'none'
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
    'link', 'quote', 'code', '|',
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
