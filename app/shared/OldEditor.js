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
      let btn = document.querySelector('.wmd-button[title="Image <img> Ctrl+G"]')
      btn.click()
    },
    hide() {
      editor.style.overflow = 'hidden'
      editor.style.height = 0
    }
  }
}
