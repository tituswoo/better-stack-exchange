require('./main.css')

import {
  getSettings,
  setSettings,
  onSettingsChanged } from 'shared/Settings'

const app = document.getElementById('settingsPage')

const checkbox = (text, checked, cb) => {
  let label = document.createElement('label')
  label.innerHTML = `<input type="checkbox">${text}`
  let checkbox = label.firstChild
  checkbox.checked = checked

  checkbox.addEventListener('change', (e) => {
    let element = e.target
    cb(element.checked)
  })

  return label
}

const render = (settings) => {
  Object.keys(settings).map((name) => {
    let checked = settings[name]
    let row = document.createElement('p')
    let pref = checkbox(name, checked, (newValue) => {
      setSettings({ [name]: newValue })
    })
    row.appendChild(pref)
    app.appendChild(row)
  })
}

getSettings((settings) => {
  render(settings)
})

onSettingsChanged((changes) => {
  console.log(changes)
})
