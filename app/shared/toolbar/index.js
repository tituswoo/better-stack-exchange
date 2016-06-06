import insertImageTool from 'shared/toolbar/insertImageTool'
import insertKbdTool from 'shared/toolbar/insertKbdTool'

export default [
  'bold', 'italic', insertKbdTool, '|',
  'link', 'quote', 'code', insertImageTool,
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
