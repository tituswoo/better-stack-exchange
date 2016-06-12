require('shared/styles/general')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'
import enhanceQuestionForm from 'shared/enhancers/enhanceQuestionForm'
import enhanceAnswerForm from 'shared/enhancers/enhanceAnswerForm'
import stickyTopbar from 'shared/enhancers/stickyTopbar'

import { getSettings } from 'shared/Settings'

const url = document.location.href

getSettings((settings) => {
  enhance(settings)
})

function enhance(settings) {
  // Sticky Toolbar:
  if (settings.stickyTopbar) {
    stickyTopbar(
      document.querySelector('.topbar'),
      document.querySelector('.container')
    )
  }

  // If answering a question:
  if (/posts\/.*\/edit/.test(url) || /questions\/.*\/.*/.test(url)) {
    if (settings.betterEditor) {
      enhanceQAEditor()
    }
    enhanceAnswerForm()
  }

  // If asking a new question:
  if (/questions\/ask$/.test(url)) {
    if (settings.betterEditor) {
      enhanceQAEditor()
    }
    enhanceQuestionForm()
  }
}
