const defaultSettings = {
  betterEditor: true,
  stickyTopbar: true,
  removeSitesInFooter: true
}

export const getSettings = (cb) => {
  chrome.storage.sync.get({
    ...defaultSettings
  }, (settings) => {
    cb(settings)
  })
}

export const setSettings = (settings, cb) => {
  chrome.storage.sync.set({
    ...settings
  }, () => {
    if (cb) cb()
  })
}

export const onSettingsChanged = (cb) => {
  chrome.storage.onChanged.addListener(changes => {
    if (changes.areaName === 'sync') {
      console.log('changed:', changes)
    }
  })
}
