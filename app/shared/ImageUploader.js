import OldEditor from 'shared/OldEditor'
const textarea = OldEditor.textarea

export const uploadImage = (cb) => {
  const originalText = textarea.value
  textarea.value = ''
  document.querySelector('#wmd-image-button-279919').click()
  console.log('clickety click')
  let checker = setInterval(() => {
    let modal = document.querySelector('.modal.image-upload')
    if (modal === null) {
      clearInterval(checker)
      console.log('done')
      const newValue = textarea.value.split(/\n/).pop()
      const startIndex = newValue.indexOf('http')
      const url = newValue.substr(startIndex)
      textarea.value = originalText
      console.log('url:', url)
      if (url) cb(url)
    }
  }, 300)
}
