import { memo, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // Выберите стиль подсветки синтаксиса, который вам нравитс

import "./CodeHighlighter.scss";

const CodeHighlighter = ({ codeExample }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="javascript">{codeExample}</code>
    </pre>
  );
};

export default memo(CodeHighlighter);
