let editor = document.querySelector('.wmd-container').parentNode
let textarea = editor.querySelector('textarea')

export default {
  editor,
  setValue(newValue) {
    textarea.value = newValue
  },
  getValue: () => textarea.value,
  uploadImage() {
    document.querySelector('#wmd-image-button-279919').click()
  },
  hide() {
    editor.style.overflow = 'hidden'
    editor.style.height = 0
  }
}
