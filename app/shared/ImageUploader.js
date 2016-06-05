const uploader = (oldEditorTextArea) => {
  return (cb) => {
    const originalText = oldEditorTextArea.value
    oldEditorTextArea.value = ''
    document.querySelector('#wmd-image-button-279919').click()
    let checker = setInterval(() => {
      let modal = document.querySelector('.modal.image-upload')
      if (modal === null) {
        clearInterval(checker)
        const newValue = oldEditorTextArea.value.split(/\n/).pop()
        const startIndex = newValue.indexOf('http')
        const url = newValue.substr(startIndex)

        oldEditorTextArea.value = originalText

        if (url) cb(url)
      }
    }, 300)
  }
}

export default uploader
