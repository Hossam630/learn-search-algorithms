import { useState } from "react";
import StateSpaceCanvas from "./StateSpaceCanvas.tsx"
import TreeCanvas from "./TreeCanvas";
import type { TreeNode } from "../../../Types";
import { romaniaGraph } from "../../data/romaniaMap.ts";

interface SSTreeProps {
  // Add your props here
}


const cityPositions: Record<string, { x: number; y: number }> = {
  Oradea: { x: 117, y: 8 },
  Zerind: { x: 82, y: 68 },
  Arad: { x: 55, y: 133 },
  Sibiu: { x: 235, y: 185 },
  Timisoara: { x: 58, y: 261 },
  Lugoj: { x: 170, y: 309 },
  Mehadia: { x: 175, y: 372 },
  Drobeta: { x: 170, y: 434 },
  Craiova: { x: 307, y: 453 },
  "Rimnicu Vilcea": { x: 277, y: 261 },
  Fagaras: { x: 393, y: 199 },
  Pitesti: { x: 416, y: 328 },
  Bucharest: { x: 540, y: 391 },
  Giurgiu: { x: 499, y: 479 },
  Urziceni: { x: 629, y: 354 },
  Hirsova: { x: 749, y: 356 },
  Eforie: { x: 794, y: 444 },
  Vaslui: { x: 711, y: 206 },
  Iasi: { x: 655, y: 110 },
  Neamt: { x: 547, y: 61 }
  // Add more positions...
};



const SSTree: React.FC<SSTreeProps> = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [tree, setTree] = useState<TreeNode[]>([]);
  const [currentDepth, setCurrentDepth] = useState<number>(0);
  const [path,setPath] = useState<string[]>([]);
   function expandNode(node: TreeNode) {
    const children = romaniaGraph[node.value] || [];
    if (currentDepth === 0){
        // Initialize tree with root node
        setTree([{value:node.value,depth:0,parentCity:""}]);
    }
    const newNodes = children.map((child) => ({
      value: child.child,
      depth: currentDepth +1,
      parentCity: node.parentCity,
    }));
    setTree((prev) => [...prev, ...newNodes]);
    setCurrentDepth((prev) => prev + 1);
    setSelectedCity(node.value);
    setPath((prev)=>[...prev,node.value]);
  } 
  console.log(selectedCity)
  return (
    <div>
      <h2>Romania State Space</h2>
      <StateSpaceCanvas cityPositions={cityPositions} path = {path} onCityClick={(city)=>{expandNode({value:city,depth:currentDepth,parentCity:city}) }} />
      <h2>Search Tree</h2>
      <TreeCanvas path={path} tree={tree}  />
    </div>
  );
};

export default SSTree;
