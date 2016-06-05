import OldEditor from 'shared/OldEditor'
import toolbar from 'shared/toolbar'

export default (textarea) => {
  return new SimpleMDE({
    element: wrap(textarea),
    toolbar,
    tabSize: 4,
    spellChecker: false,
    status: false,
    renderingConfig: {
      codeSyntaxHighlighting: true
    }
  })
}

function wrap(textarea) {
  // Create container for the new markdown editor:
  let editorContainer = document.createElement('div')
  editorContainer.className = 'better-editor'

  // Wrap the textarea with the container:
  textarea.parentNode.insertBefore(editorContainer, textarea.nextSibling)
  editorContainer.appendChild(textarea)

  return textarea
}
