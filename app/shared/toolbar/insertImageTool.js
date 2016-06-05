import { uploadImage } from 'shared/ImageUploader'
import OldEditor from 'shared/OldEditor'

const textarea = OldEditor.textarea

const insertImage = {
  name: 'insert-image',
  className: 'fa fa-picture-o',
  title: 'Insert Image',
  action(editor) {
    uploadImage((imageUrl) => {
      const doc = editor.codemirror.getDoc()
      const selectedText = doc.getSelection() || 'alt'

      const mdImage = `![${selectedText}](${imageUrl})`
      doc.replaceSelection(mdImage, 'around')

      textarea.value = doc.getValue()
    })
  }
}

export default insertImage
