const insertSnippetTool = {
  name: 'insert-snippet',
  className: 'fa fa-file-code-o',
  title: 'Insert Snippet',
  action(editor) {
    document.querySelector('.wmd-snippet-button').firstChild.click()
  },
}

export default insertSnippetTool
