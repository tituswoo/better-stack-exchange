require('shared/styles/BetterEditor')

import OldEditor from 'shared/OldEditor'
import toolbar from 'shared/toolbar'

export default (textarea) => {
  let { element, container } = wrap(textarea)

  let editor = new SimpleMDE({
    element,
    toolbar,
    tabSize: 4,
    indentWithTabs: false,
    spellChecker: false,
    promptURLs: true,
    status: false,
    renderingConfig: {
      codeSyntaxHighlighting: true
    },
    parsingConfig: {
      strikethrough: false
    }
  })

  return editor
}

function wrap(textarea) {
  // Create container for the new markdown editor:
  let editorContainer = document.createElement('div')
  editorContainer.className = 'better-editor'

  // Wrap the textarea with the container:
  textarea.parentNode.insertBefore(editorContainer, textarea.nextSibling)
  editorContainer.appendChild(textarea)

  return { element: textarea, container: editorContainer}
}
