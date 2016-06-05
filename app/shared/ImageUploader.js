import OldEditor from 'shared/OldEditor'

export const uploadImage = (cb) => {
  const oldEditor = OldEditor()
  const originalText = oldEditor.getValue()
  oldEditor.setValue('')
  oldEditor.uploadImage()
  let checker = setInterval(() => {
    let modal = document.querySelector('.modal.image-upload')
    if (modal === null) {
      clearInterval(checker)
      const newValue = oldEditor.getValue().split(/\n/).pop()
      const startIndex = newValue.indexOf('http')
      const url = newValue.substr(startIndex)
      oldEditor.setValue(originalText)
      if (url) cb(url)
    }
  }, 300)
}
