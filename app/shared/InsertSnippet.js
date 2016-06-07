import OldEditor from 'shared/OldEditor'

export const insertSnippet = (cb) => {
  let oldEditor = OldEditor()
  oldEditor.setValue('')
  document.querySelector('.wmd-snippet-button').firstChild.click()
  let checker = setInterval(() => {
    let snippetWindow = document.querySelector('.popup-snippet')
    if (!snippetWindow) {
      clearInterval(checker)
      const snippet = oldEditor.getValue()
      if (snippet) cb(snippet)
    }
  }, 300)
}
