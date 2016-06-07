import insertImageTool from 'shared/toolbar/insertImageTool'
import insertKbdTool from 'shared/toolbar/insertKbdTool'
import insertSnippetTool from 'shared/toolbar/insertSnippetTool'

export default [
  'bold', 'italic', insertKbdTool, '|',
  'link', 'quote', 'code', insertImageTool, insertSnippetTool, '|',
  'ordered-list', 'unordered-list', 'horizontal-rule', '|',
  'preview', 'side-by-side', 'fullscreen'
]
