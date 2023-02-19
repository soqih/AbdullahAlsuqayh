import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
// import styles from "./Editor.module.css"
import draftToHtml from 'draftjs-to-html';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const MyEditor = ({ getContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState();

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    // console.log(text)
    setText(text);
    functionHandler(getContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))))
  };

const functionHandler = (data) => {
  // console.log(data)
  getContent(data);
}

return (
  <>

    <Editor

      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      placeholder="write here"
      editorStyle={{ border: '1px solid #ededed', minHeight: '100px', padding: '0.5rem' }}
    />
  </>
);
}
export default MyEditor