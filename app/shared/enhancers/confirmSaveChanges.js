// Run this script using the script loader.
window.addEventListener('message', (message) => {

  let { isDirty } = message.data

  window.onbeforeunload = function() {
    return isDirty ? 'Changes you made may not be saved.' : null
  }
}, false)
