import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import styled from "styled-components";
import { font } from "@/styles/font";
import { colors } from "@/styles/colors";
import Quill from "quill";

const list = Quill.import("formats/list");

if (list) {
  Quill.register(list, true);
}

const EditorContainer = styled.div`
  min-height: 243px;
  border-radius: 8px;
  border: 1px solid #ccc;
  overflow: hidden;

  .ql-toolbar.ql-snow {
    background-color: #eee;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 14px 16px;
    line-height: 1;

    .ql-formats {
      margin-right: 12px;
    }
    .ql-formats button,
    .ql-formats select {
      width: 24px;
      height: 24px;
      padding: 0;
      margin-right: 8px;
    }
  }

  .ql-container.ql-snow {
    border: none;
    ${font.regular16};
    color: ${colors.gray[900]};
  }

  .ql-editor {
    min-height: 200px;
    padding: 16px;
  }
`;

function RichTextEditor({ value, onChange }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  const formats = ["bold", "italic", "underline", "align", "list"];

  return (
    <EditorContainer>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="500자 미만으로 입력해 주세요."
      />
    </EditorContainer>
  );
}

export default RichTextEditor;
