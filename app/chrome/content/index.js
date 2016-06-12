require('shared/styles/general')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'
import enhanceQuestionForm from 'shared/enhancers/enhanceQuestionForm'
import enhanceAnswerForm from 'shared/enhancers/enhanceAnswerForm'

import { getSettings } from 'shared/Settings'

const url = document.location.href

getSettings((settings) => {
  enhance(settings)
})

function enhance(settings) {
  const { betterEditor, stickyToolbar } = settings
  // If answering a question:
  if (/posts\/.*\/edit/.test(url) || /questions\/.*\/.*/.test(url)) {
    if (betterEditor) {
      enhanceQAEditor()
    }
    enhanceAnswerForm()
  }

  // If asking a new question:
  if (/questions\/ask$/.test(url)) {
    if (betterEditor) {
      enhanceQAEditor()
    }
    enhanceQuestionForm()
  }
}
