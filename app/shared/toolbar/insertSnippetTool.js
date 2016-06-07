import { insertSnippet } from 'shared/InsertSnippet'

const insertSnippetTool = {
  name: 'insert-snippet',
  className: 'fa fa-file-code-o',
  title: 'Insert Snippet',
  action(editor) {
    insertSnippet((snippet) => {
      const doc = editor.codemirror.getDoc()
      doc.replaceSelection(snippet, 'around')
    })
  }
}

export default insertSnippetTool
