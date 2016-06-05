let editor = document.querySelector('.wmd-container').parentNode
let textarea = editor.querySelector('textarea')

export default {
  editor,
  setValue(newValue) {
    textarea.value = newValue
  },
  getValue: () => textarea.value
}
