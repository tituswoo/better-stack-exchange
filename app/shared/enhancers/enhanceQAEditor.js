require('!script!strip?strip[]=console!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
require('script!highlight.js/lib/highlight.js')
require('highlight.js/styles/github.css')

import OldEditor from 'shared/OldEditor'
import betterEditor from 'shared/BetterEditor'

export default function() {
  const oldEditor = OldEditor()

  oldEditor.hide()

  // Create backing textarea for the new markdown editor,
  // and place it next to the old editor:
  let textarea = document.createElement('textarea')
  oldEditor.editor.parentNode.insertBefore(textarea, oldEditor.editor.nextSibling)

  // Create a shiny new markdown editor, and sync it up with
  // the contents of the old editor:
  let newEditor = betterEditor(textarea)
  newEditor.codemirror.setOption('viewportMargin', Infinity)
  newEditor.value(oldEditor.getValue())

  // Updated the old markdown editor's backing textarea with
  // the contents of the new markdown editor.
  // This is how changes are saved when you add/update a question/answer.
  newEditor.codemirror.on('change', (instance, changeObj) => {
    oldEditor.setValue(newEditor.value())
  })
}