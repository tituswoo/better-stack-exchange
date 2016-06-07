require('script!shared/enhancers/confirmSaveChanges.js')

export default function() {
  let submitBtn = document.querySelector('#submit-button')
  submitBtn.addEventListener('click', function() {
    window.postMessage({ isDirty: false }, '*')
  })
}
