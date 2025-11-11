import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";


export default function Page2() {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/performance-measurment.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
      <footer className="footer">
        <Link className="prev" to="/">prev:State space and Trees</Link>
        <Link className="next" to="/depth-first-search">Next:Depth First Search</Link>
      </footer>
    </>
  );
}
