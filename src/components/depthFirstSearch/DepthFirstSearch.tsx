import RenderTree from "../Tree/RenderTree";
import { useState } from "react";

type TreeNode = {
  id: number;
  value: number;
  depth: number;
  parentId: number | null;
};

const nodes: TreeNode[] = [
  { id: 1, value: 10, depth: 0, parentId: null },
  { id: 2, value: 20, depth: 1, parentId: 1 },
  { id: 3, value: 30, depth: 1, parentId: 1 },

  { id: 4, value: 40, depth: 2, parentId: 2 },
  { id: 5, value: 50, depth: 2, parentId: 2 },
  { id: 6, value: 60, depth: 2, parentId: 3 },
  { id: 7, value: 70, depth: 2, parentId: 3 },

  { id: 8, value: 80, depth: 3, parentId: 4 },
  { id: 9, value: 90, depth: 3, parentId: 4 },
  { id: 10, value: 100, depth: 3, parentId: 5 },
  { id: 11, value: 110, depth: 3, parentId: 5 },
  { id: 12, value: 120, depth: 3, parentId: 6 },
  { id: 13, value: 130, depth: 3, parentId: 6 },
  { id: 14, value: 140, depth: 3, parentId: 7 },
  { id: 15, value: 150, depth: 3, parentId: 7 },
];

export default function DepthFirstSearch() {
  const [visitedNodesIDs, setVisitedNodesIDs] = useState<number[]>([]);
  const [visitedNodes, setVisitedNodes] = useState<TreeNode[]>([]);
  function handleNodeClick(node: TreeNode) {
    setVisitedNodes((prev) => {
      if (prev.find((n) => n.id === node.id)) return prev;
      const newNodes = [...prev, node];
      // Update visitedNodesIDs immediately with the new node
      setVisitedNodesIDs(newNodes.map((n) => n.id));
      return newNodes;
    });
  }
  const algorithmSequence: number[] = [];
  const parentNode =nodes.find(node=>node.parentId==null)
  parentNode?DFS(parentNode, nodes, algorithmSequence):null;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RenderTree
        nodes={nodes}
        handleNodeClick={handleNodeClick}
        visitedNodesIDs={visitedNodesIDs}
      />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          gap: 12,
          marginLeft: 20,
        }}
      >
        <h2>Algorithm sequence</h2>
        <div
          style={{
            width: "100%",
            height: 60,
            border: "2px solid #333",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
          }}
        >
          {algorithmSequence.map((id) => {
            const node = nodes.find((n) => n.id === id);
            return node ? node.value : null;
          }).join(",")}
        </div>
        <h2>Your sequence</h2>
        <div
          style={{
            width: "100%",
            height: 60,
            border: "2px solid #333",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:arraysEqual(algorithmSequence,visitedNodes.map((n) => n.id))?"#fafafa" :"#fff5f5",
          }}
        >
          {visitedNodes.map((n) => n.value).join(",")}
        </div>
      </div>
    </div>
  );
}

function DFS(
  root: TreeNode,
  nodes: TreeNode[],
  visitedNodesIDs: number[] = []
): void {
  if (visitedNodesIDs.includes(root.id)) return;

  visitedNodesIDs.push(root.id);

  const neighbors = nodes.filter((node) => node.parentId === root.id);

  for (const neighbor of neighbors) {
    if (visitedNodesIDs.includes(neighbor.id)) continue;
    DFS(neighbor, nodes, visitedNodesIDs);
  }
}

function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

