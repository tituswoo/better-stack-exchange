require('shared/styles/general.css')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'
import enhanceQuestionForm from 'shared/enhancers/enhanceQuestionForm'

const url = document.location.href

// If answering a question:
if (/posts\/.*\/edit/.test(url)) {
  enhanceQAEditor()
}

// If asking a new question:
if (/questions\/ask$/.test(url)) {
  enhanceQuestionForm()
  enhanceQAEditor()
}
