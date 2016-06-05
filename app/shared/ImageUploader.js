import OldEditor from 'shared/OldEditor'

export const uploadImage = (cb) => {
  const originalText = OldEditor.getValue()
  OldEditor.setValue('')
  OldEditor.uploadImage()
  let checker = setInterval(() => {
    let modal = document.querySelector('.modal.image-upload')
    if (modal === null) {
      clearInterval(checker)
      const newValue = OldEditor.getValue().split(/\n/).pop()
      const startIndex = newValue.indexOf('http')
      const url = newValue.substr(startIndex)
      OldEditor.setValue(originalText)
      if (url) cb(url)
    }
  }, 300)
}
