import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BreadthFirstSearch from "../components/breadthFirstSearch/BreadthFirstSearch";

export default function Page4() {
  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/content/breadthFirstSearch.md").then((res) => res.text()),
      fetch("/content/breadthFirstSearch1.md").then((res) => res.text()),
    ])
      .then(([content1, content2]) => {
        setContents([content1, content2]);
      })
      .catch((error) => {
        console.error("Error loading markdown files:", error);
      });
  }, []);
  return (
    <>
      <div className="markdown-content">
        <div key={`content-${0}`} className="markdown-section">
          <ReactMarkdown>{contents[0]}</ReactMarkdown>
        </div>
        <div key={`content-${1}`} className="markdown-section">
          <ReactMarkdown>{contents[1]}</ReactMarkdown>
        </div>
        <BreadthFirstSearch />
      </div>

      <h2>code implementation</h2>
      <SyntaxHighlighter language="python" style={oneLight}>
        {`
        def BFS(startNode,graph):
            # mark start node as visited
            visited[startNode] = True
            queue = []
            queue.append(startNode)
            while queue is not empty:
                currentNode = queue.pop(0)
                for neighbor in graph[currentNode]:
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        queue.append(neighbor)
            return    
        `}
      </SyntaxHighlighter>

      <footer className="footer">
        <Link className="previous" to="/depth-first-search">
          Prev:Depth-first Search
        </Link>
        <Link className="next" to="/dijkstra">
          Next:Dijkstra's Algorithm
        </Link>
      </footer>
    </>
  );
}
