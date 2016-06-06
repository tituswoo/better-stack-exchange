require('shared/styles/general.css')

console.info('BETTER STACK EXCHANGE ENABLED!')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'
import enhanceQuestionForm from 'shared/enhancers/enhanceQuestionForm'

const url = document.location.href

// If answering a question:
if (/questions\/.*\/.*/.test(url)) {
  console.info('answering a question')
  enhanceQAEditor()
}

// If asking a new question:
if (/questions\/ask$/.test(url)) {
  console.info('asking a new question')
  enhanceQuestionForm()
  enhanceQAEditor()
}
