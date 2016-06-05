console.info('BETTER STACK EXCHANGE ENABLED!')

import enhanceQAEditor from 'shared/enhancers/enhanceQAEditor'

const url = document.location.href

// If answering a question:
if (/.*\/questions\/.*\/.*/.test(url)) {
  console.info('answering a question')
  enhanceQAEditor()
}
