import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";


export default function Page6() {
  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/content/depthLimitedSearch.md").then((res) => res.text()),
      fetch("/content/depthLimitedSearch1.md").then((res) => res.text()),
      fetch("/content/depthLimitedSearch2.md").then((res) => res.text()),
    ])
      .then(([content1, content2,content3]) => {
        setContents([content1, content2,content3]);
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
        N(IDS) = (d) * b¹ + (d - 1) * b² + (d - 2) * b³ + ... + b<sup>d</sup>
        </h4>

        <div key={`content-${1}`} className="markdown-section">
          <ReactMarkdown>{contents[1]}</ReactMarkdown>
        </div>
        <h4 style={{ textAlign: "center" }}>
            N(IDS) = 50 + 400 + 3000 + 20000 + 100000 = 123450 
        </h4>
        <h4 style={{ textAlign: "center" }}>
            N(BFS) = 10 + 100 + 1000 + 10000 + 100000 = 111110
        </h4>

        <div key={`content-${2}`} className="markdown-section">
          <ReactMarkdown>{contents[2]}</ReactMarkdown>
        </div>
      </div>


      <footer className="footer">
        <Link className="previous" to="/dijkstra">
          Prev:Dijkstra's Algorithm
        </Link>
        <Link className="next" to="/bidirectional-search">
          Next:Bi-directional Search
        </Link>
      </footer>
    </>
  );
}
