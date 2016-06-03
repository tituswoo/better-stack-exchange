require('script!simplemde/dist/simplemde.min.js')
require('simplemde/dist/simplemde.min.css')

console.info('ENHANCING STACK EXCHANGE')

let oldEditor = document.querySelector('.wmd-container')
oldEditor.style.display = 'none'
let oldEditorTextArea = oldEditor.querySelector('textarea')

let editor = document.createElement('div')
editor.id = 'better-post-editor'

oldEditor.parentNode.insertBefore(editor, oldEditor.nextSibling)
