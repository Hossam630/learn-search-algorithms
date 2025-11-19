import { useState } from "react";
import RenderTree from "../Tree/RenderTree";

type NodeInput = {
  id: number;
  value: number;
  depth: number;
  parentId: number | null;
};

type PositionedNode = NodeInput & {
  x: number;
  y: number;
};

type QueueItem = {
  id: number;
  value: number;
  status: "queued" | "visited";
};

const nodes: NodeInput[] = [
  { id: 1, value: 10, depth: 0, parentId: null },
  { id: 2, value: 5, depth: 1, parentId: 1 },
  { id: 3, value: 15, depth: 1, parentId: 1 },
  { id: 4, value: 3, depth: 2, parentId: 2 },
  { id: 5, value: 7, depth: 2, parentId: 2 },
  { id: 6, value: 12, depth: 2, parentId: 3 },
  { id: 7, value: 80, depth: 2, parentId: 3 },
];
const algorithmSequence: number[] = BFS(nodes[0], nodes).map((n) => n.value);
export default function BreadthFirstSearch() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [visitedNodesIDs, setVisitedNodesIDs] = useState<number[]>([]);
  const [yourSequence, setYourSequence] = useState<QueueItem[]>([]);
  // Position nodes relative to their parent

  // Handle node clicks
  const handleNodeClick = (node: PositionedNode) => {
    if (visitedNodesIDs.includes(node.id)) {
      setQueue((prev) => [
        ...prev,
        { id: node.id, value: node.value, status: "visited" },
      ]);
    } else {
      setQueue((prev) => [
        ...prev,
        { id: node.id, value: node.value, status: "queued" },
      ]);
    }
    if (!visitedNodesIDs.includes(node.id))
      setVisitedNodesIDs((prevIDs) => [...prevIDs, node.id]);
  };

  const handleDelete = (item: QueueItem, index: number) => {
    setQueue((prev) => prev.filter((_, i) => i !== index));
    setYourSequence((prev) => [...prev, item]);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Tree Canvas */}
        <RenderTree
          nodes={nodes}
          handleNodeClick={handleNodeClick}
          visitedNodesIDs={visitedNodesIDs}
          canvasSize={{width:900,height:400}}
        />
        {/* Queue Panel */}
        <div
          style={{
            marginLeft: "20px",
            width: "250px",
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <h3>Queue</h3>
          {queue.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
                padding: "6px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor:
                  item.status === "queued" ? "#f8f9fa" : "#d4edda",
              }}
            >
              <span>
                Node {item.value} (
                {item.status === "queued" ? "queued" : "visited"})
              </span>
              <button style={{backgroundColor:"red"}} onClick={() => handleDelete(item, index)}>Dequeue</button>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginLeft: 20,
        }}
      >
        <h2>Algorithm sequence</h2>
      <div
        style={{
            width: "100%",
            maxWidth: 600,
            height: 60,
            border: "2px solid #333",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
        }}
        >
        {algorithmSequence.join(",")}
      </div>
      <h2>Your sequence</h2>
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          height: 60,
          border: "2px solid #333",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: arraysEqual(algorithmSequence,yourSequence.map((n) => n.value))?"#fafafa":"#fff5f5",
        }}
        >
        {yourSequence.map((n) => n.value).join(",")}
      </div>
      </div>
    </>
  );
}

function BFS(startNode: NodeInput, nodes: NodeInput[]): NodeInput[] {
  const visited: NodeInput[] = [startNode];
  const queue: NodeInput[] = [startNode];
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    const children = nodes.filter((n) => n.parentId === currentNode.id);
    for (const child of children) {
      if (visited.find((n) => n.id === child.id)) {
        continue;
      }
      visited.push(child);
      queue.push(child);
    }
  }
  return visited;
}

function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
