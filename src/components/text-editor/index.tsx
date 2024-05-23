import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function TextEditor({
  content,
  editContent,
}: {
  content: any;
  editContent: any;
}) {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState(content);

  useEffect(() => {
    setCode(content);
  }, [content]);

  const handleProcedureContentChange = (content: any) => {
    setCode(content);
    editContent(content);
  };
  return (
    <ReactQuill
      className="h-[66rem]"
      theme="snow"
      placeholder="Write content here..."
      modules={modules}
      formats={formats}
      value={code}
      onChange={handleProcedureContentChange}
    />
  );
}
