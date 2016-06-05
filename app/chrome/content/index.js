require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')
require('./styles.css')

import toolbar from 'shared/toolbar'
import OldEditor from 'shared/OldEditor'

// Hide the old markdown editor:
OldEditor.editor.style.overflow = 'hidden'
OldEditor.editor.style.height = 0

// Create container for the new markdown editor:
let editorContainer = document.createElement('div')
editorContainer.id = 'better-editor'

// Create backing textarea for the new markdown editor:
let editor = document.createElement('textarea')
OldEditor.editor.parentNode.insertBefore(editorContainer, OldEditor.editor.nextSibling)
editorContainer.appendChild(editor)

const config = {
  element: editor,
  toolbar,
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
newEditor.value(OldEditor.textarea.value)

// Updated the old markdown editor's backing textarea with
// the contents of the new markdown editor.
// This is how changes are saved when you add/update a question/answer.
newEditor.codemirror.on('change', (instance, changeObj) => {
  OldEditor.textarea.value = newEditor.value()
})
