import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");
  const [blog, setBlog] = useState(null);
  const [preview, setPreview] = useState([]);

  console.log(value);
  const handleBlog = () => {
    if (value === "") {
      alert("Write something");
      return;
    }
    setBlog(value);
    setValue("");
  };

  const handlePreview = () => {
    setPreview([]);
    if (blog === null) {
      alert("No blog to preview");
      return;
    }
    const content = blog.split("<br/>");
    setPreview(content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="main-container">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
        className="mt-5"
        placeholder="Start write your blog "
      />
      <button
        className="mt-5 px-10 py-3 bg-slate-800  font-[700] text-white rounded-full"
        onClick={handleBlog}
      >
        Save Blog
      </button>
      <button
        className="mt-5 px-10 py-3 bg-slate-800 ml-3  font-[700] text-white rounded-full"
        onClick={handlePreview}
      >
        Preview Blog
      </button>
      <div className="mt-10 px-7">
        {preview.map((p, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: p }}
            className="mt-1 content"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
