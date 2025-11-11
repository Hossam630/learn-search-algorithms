import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SSTree from "../components/SS_Tree/SSTree";
import { Link } from "react-router-dom";


export default function Page1() {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/3.3.1.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
      <SSTree />
      <footer className="footer">
        <Link className="next" to="/performance-measurement">Next:Performance Measurement</Link>
      </footer>
    </>
  );
}
