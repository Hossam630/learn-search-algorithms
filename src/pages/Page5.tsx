import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import DijkstrasAlgorithm from "../components/Dijktsras_algorithm/DijkstrasAlgorithm";

export default function Page5() {
  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/content/dijkstras.md").then((res) => res.text()),
      fetch("/content/dijkstras1.md").then((res) => res.text()),
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
        <h4 style={{ textAlign: "center" }}>
          O(b<sup>1 + C / ε</sup>)
        </h4>

        <div key={`content-${1}`} className="markdown-section">
          <ReactMarkdown>{contents[1]}</ReactMarkdown>
        </div>
        <DijkstrasAlgorithm />
      </div>

      <h2>code implementation</h2>
      <SyntaxHighlighter language="python" style={oneLight}>
        {`
        def dijkstra(graph, start):
            # Initialize distances and priority queue
            distances = {node: float('inf') for node in graph}
            distances[start] = 0
            priority_queue = [(0, start)]  # (distance, node)

            while priority_queue is not empty:
                current_distance, current_node = minDistanceNode(priority_queue)

                # Skip if we've already found a better path
                if current_distance > distances[current_node]:
                    continue

                for neighbor, weight in graph[current_node]:
                    distance = current_distance + weight

                    # If a shorter path is found
                    if distance < distances[neighbor]:
                        distances[neighbor] = distance
                        priority_queue.append((distance, neighbor))

            return distances
  
        `}
      </SyntaxHighlighter>

      <footer className="footer">
        <Link className="previous" to="/breadth-first-search">
          Prev:Breadth-first search
        </Link>
        <Link className="next" to="/depth-limted-search">
          Next:Depth limited Search
        </Link>
      </footer>
    </>
  );
}
