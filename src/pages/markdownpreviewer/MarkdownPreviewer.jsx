import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

import "./markdownpreviewer.scss";

const Toolbar = ({ children }) => {
  return (
    <div className="toolbar">
      <FontAwesomeIcon icon={faFreeCodeCamp} />
      <span className="title">{children}</span>
      <FontAwesomeIcon icon={faMaximize} className="closeIcon" />
    </div>
  );
};

const MarkdownPreviewer = () => {
  const [text, setText] = useState("");

  return (
    <div className="wrapper">
      <div className="editorWrap">
        <textarea
          id="editor"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="previewWrap">
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
