import StateSpaceCanvas from "../SS_Tree/StateSpaceCanvas";
import TreeCanvas from "../SS_Tree/TreeCanvas";
import { useState } from "react";
import type { TreeNode } from "../../../Types";

interface DDijkstrasAlgorithmProps {}

type CostedTreeNode = TreeNode & { cost?: number };

const romaniaGraph: Record<string, { child: string; weight: number }[]> = {
  Sibiu: [
    { child: "Rimnicu Vilcea", weight: 80 },
    { child: "Fagaras", weight: 99 },
  ],
  "Rimnicu Vilcea": [
    { child: "Sibiu", weight: 80 },
    { child: "Pitesti", weight: 97 },
  ],
  Fagaras: [
    { child: "Sibiu", weight: 99 },
    { child: "Bucharest", weight: 211 },
  ],
  Pitesti: [
    { child: "Rimnicu Vilcea", weight: 97 },
    { child: "Bucharest", weight: 101 },
  ],
  Bucharest: [
    { child: "Fagaras", weight: 211 },
    { child: "Pitesti", weight: 101 },
  ],
};

const cityPositions: Record<string, { x: number; y: number }> = {
  Sibiu: { x: 235, y: 185 },
  "Rimnicu Vilcea": { x: 277, y: 261 },
  Fagaras: { x: 393, y: 199 },
  Pitesti: { x: 416, y: 328 },
  Bucharest: { x: 540, y: 391 },

  // Add more positions...
};

const DijkstrasAlgorithm: React.FC<DDijkstrasAlgorithmProps> = () => {
  const [tree, setTree] = useState<CostedTreeNode[]>([]);
  const [path, setPath] = useState<string[]>([]);
  const initialAlgorithmData = Object.keys(romaniaGraph).reduce((acc, city) => {
    acc[city] = { cost: Infinity, prevCity: "" };
    return acc;
  }, {} as Record<string, { cost: number; prevCity: string }>);

  const [algorithmData, setAlgorithmData] =
    useState<Record<string, { cost: number; prevCity: string }>>(
      initialAlgorithmData
    );

  const onCityClick = (city: string) => {
    if (path.length > 0) return;
    setPath((prev) => [...prev, city]);
    setTree([{ value: city, depth: 0, parentCity: "", cost: 0 }]);
    setAlgorithmData((prevData) => ({
      ...prevData,
      [city]: { cost: 0, prevCity: "" },
    }));
  };
  const handleNodeClick = (node: TreeNode) => {
    const childrenCities = romaniaGraph[node.value] || [];
    const ExpandedNodes: CostedTreeNode[] = [];
    const childrenObj: Record<string, { cost: number; prevCity: string }> = Object.fromEntries(
      childrenCities.map((c)=>{
        if (algorithmData[c.child].cost > c.weight + (node.cost ?? 0)) {
          const newCost= c.weight + (node.cost ?? 0);
          return [c.child,{cost: newCost, prevCity: node.value}];
        }
        return [c.child,{cost: algorithmData[c.child].cost, prevCity: algorithmData[c.child].prevCity}];
      }));

    if (!path.includes(node.value)) setPath((prev) => [...prev, node.value]);
    const parentCostedNode = tree.find(
      (n) => n.value === node.value && n.depth === node.depth
    ) as CostedTreeNode;

    childrenCities.forEach((child) => {
      ExpandedNodes.push({
        value: child.child,
        depth: node.depth + 1,
        parentCity: node.value,
        cost: (parentCostedNode.cost || 0) + child.weight,
      });

    });
    setTree((prevNodes) => [...prevNodes, ...ExpandedNodes]);
    setAlgorithmData((prevData) => ({
      ...prevData,
      ...childrenObj
    }));
  };
  console.log("DijkstrasAlgorithm data:", algorithmData);

  return (
    <>
      <StateSpaceCanvas
        cityPositions={cityPositions}
        onCityClick={onCityClick}
        path={path}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TreeCanvas tree={tree} handleNodeClick={handleNodeClick} />
        <div
          style={{
            height:"fit-content",
            overflowY: "auto",
            border: "2px solid #ccc",
            borderRadius: "6px",
            marginLeft: "20px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#e0e0e0" }}>
                <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                  City
                </th>
                <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                  Cost
                </th>
                <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                  Prev City
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(algorithmData).map((city) => (
                <tr key={city}>
                  <td
                    style={{ padding: "6px", borderBottom: "1px solid #eee" }}
                  >
                    {city}
                  </td>
                  <td
                    style={{ padding: "6px", borderBottom: "1px solid #eee" }}
                  >
                    {algorithmData[city].cost === Infinity
                      ? "∞"
                      : algorithmData[city].cost}
                  </td>
                  <td
                    style={{ padding: "6px", borderBottom: "1px solid #eee" }}
                  >
                    {algorithmData[city].prevCity || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DijkstrasAlgorithm;
