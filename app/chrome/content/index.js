require('shared/styles/general.css')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'
import enhanceQuestionForm from 'shared/enhancers/enhanceQuestionForm'
import enhanceAnswerForm from 'shared/enhancers/enhanceAnswerForm'

const url = document.location.href

// If answering a question:
if (/posts\/.*\/edit/.test(url) || /questions\/.*\/.*/.test(url)) {
  enhanceAnswerForm()
  enhanceQAEditor()
}

// If asking a new question:
if (/questions\/ask$/.test(url)) {
  enhanceQuestionForm()
  enhanceQAEditor()
}
