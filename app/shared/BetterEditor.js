require('shared/styles/BetterEditor')

import OldEditor from 'shared/OldEditor'
import toolbar from 'shared/toolbar'

export default (textarea) => {
  let { textarea: backingTxt, container } = wrap(textarea)
  let editor = new SimpleMDE({
    element: backingTxt,
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

  window.addEventListener('scroll', (e) => {

  })

  editor.codemirror.on('drop', (e) => {
    console.log('DROPPED', e)
  })

  return editor
}

function wrap(textarea) {
  // Create container for the new markdown editor:
  let container = document.createElement('div')
  container.className = 'better-editor'

  // Wrap the textarea with the container:
  textarea.parentNode.insertBefore(container, textarea.nextSibling)
  container.appendChild(textarea)

  return { textarea, container }
}
