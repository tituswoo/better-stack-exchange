require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')
require('shared/styles/general.css')

import OldEditor from 'shared/OldEditor'
import betterEditor from 'shared/BetterEditor'

OldEditor.hide()

// Create backing textarea for the new markdown editor,
// and place it next to the old editor:
let textarea = document.createElement('textarea')
OldEditor.editor.parentNode.insertBefore(textarea, OldEditor.editor.nextSibling)

// Create a shiny new markdown editor, and sync it up with
// the contents of the old editor:
let newEditor = betterEditor(textarea)
newEditor.codemirror.setOption('viewportMargin', Infinity)
newEditor.value(OldEditor.getValue())

// Updated the old markdown editor's backing textarea with
// the contents of the new markdown editor.
// This is how changes are saved when you add/update a question/answer.
newEditor.codemirror.on('change', (instance, changeObj) => {
  OldEditor.setValue(newEditor.value())
})
