export default () => {
  let editor = document.querySelector('.wmd-container').parentNode
  let textarea = editor.querySelector('textarea')

  return {
    editor,
    setValue(newValue) {
      textarea.value = newValue
    },
    getValue: () => textarea.value,
    uploadImage() {
      let attempt1 = document.getElementById('wmd-image-button')
      let attempt2 = document.getElementById('wmd-image-button-279919')
      attempt1 ? attempt1.click() : attempt2.click()
    },
    hide() {
      editor.style.overflow = 'hidden'
      editor.style.height = 0
    }
  }
}
