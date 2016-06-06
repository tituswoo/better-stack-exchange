const insertKbdTool = {
  name: 'insert-kbd',
  className: 'fa fa-keyboard-o',
  title: 'Insert KBD',
  action(editor) {
    const doc = editor.codemirror.getDoc()
    const selected = doc.getSelection()
    const wrapped = `<kbd>${selected}</kbd>`
    doc.replaceSelection(wrapped, 'around')
  }
}

export default insertKbdTool
