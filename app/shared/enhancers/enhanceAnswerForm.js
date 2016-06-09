import enhanceAnswerButton from 'shared/enhancers/enhanceSubmitButton'

export default function() {

  // Hide the "Title:" label
  const postEditor = document.querySelector('.post-editor')

  if (postEditor) {
    let item = postEditor.querySelector('.form-item td label[for="title"]')
    item.parentNode.style.display = 'none'
  }

  // Remove the padding next to the title input element
  const title = document.querySelector('#title')

  if (title) {
    title.parentNode.style.paddingLeft = '0'
  }

  enhanceAnswerButton()
}
