import insertImageTool from 'shared/toolbar/insertImageTool'
import insertKbdTool from 'shared/toolbar/insertKbdTool'
import insertSnippetTool from 'shared/toolbar/insertSnippetTool'

export default function() {

  const url = document.location.href

  if ((/stackoverflow/).test(url)) {
    return [
      'bold', 'italic', insertKbdTool, '|',
      'link', 'quote', 'code', insertImageTool, insertSnippetTool, '|',
      'ordered-list', 'unordered-list', 'horizontal-rule', '|',
      'preview', 'side-by-side', 'fullscreen'
    ]
  }

  return [
    'bold', 'italic', insertKbdTool, '|',
    'link', 'quote', 'code', insertImageTool, '|',
    'ordered-list', 'unordered-list', 'horizontal-rule', '|',
    'preview', 'side-by-side', 'fullscreen'
  ]
}
