require('shared/styles/enhanceQuestionForm')

export default function() {
  const questionForm = document.querySelector('#question-form')
  questionForm.querySelector('.ask-title-cell-key').style.display = 'none'

  let title = questionForm.querySelector('#title')
  title.focus()
}
