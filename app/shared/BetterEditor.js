require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')
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

  stickyHeader(container)

  return editor
}

function addCustomOverlay(cm) {
  // future feature
  // cm.addOverlay({
  //   name: 'stackExchange',
  //   token(stream, state) {
  //     stream.skipToEnd()
  //     return 'comment'
  //   }
  // })
}

function stickyHeader(container) {

  let toolbar = container.querySelector('.editor-toolbar')
  let editor = container.querySelector('.CodeMirror-wrap')

  const defaultToolbarStyles = { ...toolbar.style }
  const defaultContainerStyles = { ...editor.style }

  doSticky()

  window.addEventListener('scroll', () => doSticky())

  function doSticky() {
    let distFromTop = container.getBoundingClientRect().top
    const isHidden = !container.offsetParent

    if (distFromTop <= 0 && !isHidden) {
      toolbar.style.position = 'fixed'
      toolbar.style.top = '0'
      toolbar.style.zIndex = '1000'
      toolbar.style.opacity = '1'
      toolbar.style.backgroundColor = 'white'
      toolbar.style.border = '1px solid #ddd'
      toolbar.style.borderTop = 'none'
      toolbar.style.width = editor.offsetWidth + 'px'
      toolbar.style.boxSizing = 'border-box'
      container.style.paddingTop = toolbar.offsetHeight + 'px'
    } else {
      toolbar.style = defaultToolbarStyles
      container.style = defaultContainerStyles
    }
  }
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
