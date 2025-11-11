import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import DepthFirstSearch from "../components/depthFirstSearch/DepthFirstSearch";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page3() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("/content/depthFirstSearch.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
      <DepthFirstSearch />
      <h2>code implementation</h2>
      <SyntaxHighlighter language="python" style={oneLight}>
            {`def DFS(node):
        # mark node as visited
        visited[node] = True
        for neighbor in graph[node]:
            if not visited[neighbor]:
                DFS(neighbor)
        return`}
      </SyntaxHighlighter>

      <footer className="footer">
        <Link className="previous" to="/performance-measurement">
          Prev:Performance Measurement
        </Link>
        <Link className="next" to="/breadth-first-search">
          Next:Breadth First Search
        </Link>
      </footer>
    </>
  );
}
