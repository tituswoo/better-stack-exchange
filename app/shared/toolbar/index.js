import insertImageTool from 'shared/toolbar/insertImageTool'

export default [
  'bold', 'italic', '|',
  'link', 'quote', 'code',
  insertImageTool,
  {
    name: 'snippet',
    action(editor) {
    },
    className: 'fa fa-file-code-o',
    title: 'Insert Snippet'
  }, '|',
  'ordered-list', 'unordered-list', '|',
  'preview', 'side-by-side', 'fullscreen'
]
