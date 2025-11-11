import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";


export default function Page7() {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/bidirectional-search.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
      <footer className="footer">
        <Link className="prev" to="/depth-limted-search">Prev:Depth limited search</Link>
        <Link className="next" to="/summary">Next:Summary</Link>
      </footer>
    </>
  );
}