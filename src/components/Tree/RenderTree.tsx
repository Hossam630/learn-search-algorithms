import React, { useMemo } from "react";
import { Stage, Layer, Circle, Text, Line } from "react-konva";

type TreeNode = {
  id: number;
  value: number;
  depth: number;
  parentId: number | null;
};

type PositionedNode = TreeNode & {
  x: number;
  y: number;
};

interface Props {
  nodes: TreeNode[];
  handleNodeClick: (node: PositionedNode) => void;
  visitedNodesIDs: number[];
  canvasSize?: { width: number; height: number };
}

export default function RenderTree({
  nodes,
  handleNodeClick,
  visitedNodesIDs,
  canvasSize = { width: 900, height: 600 }, // default value
}: Props) {
  // Position nodes relative to their parent
  const positionedNodes: PositionedNode[] = useMemo(() => {
    const spacingY = 100;
    const baseOffsetX = 300;
    const positioned: PositionedNode[] = [];

    function assignPosition(node: TreeNode) {
      const offset = baseOffsetX - 85 * node.depth;
      let x: number;

      if (node.parentId === null) {
        // Root node centered
        x = 450;
      } else {
        const parent = positioned.find((n) => n.id === node.parentId);
        if (!parent) return;

        // Decide left/right based on whether this is the first or second child
        const siblings = nodes.filter((n) => n.parentId === node.parentId);
        const index = siblings.findIndex((s) => s.id === node.id);

        if (index === 0) {
          x = parent.x - offset; // left child
        } else {
          x = parent.x + offset; // right child
        }
      }

      const y = 50 + node.depth * spacingY;
      positioned.push({ ...node, x, y });

      // Recurse for children
      nodes
        .filter((child) => child.parentId === node.id)
        .forEach((child) => assignPosition(child));
    }

    // Start with root(s)
    nodes.filter((n) => n.parentId === null).forEach((root) => assignPosition(root));

    return positioned;
  }, [nodes]);

  // Memoized rendering of nodes
  const renderedNodes = useMemo(() => {
    return positionedNodes.map((node) => (
      <React.Fragment key={`node-${node.id}`}>
        <Circle
          x={node.x}
          y={node.y}
          radius={25}
          fill={visitedNodesIDs.includes(node.id) ? "red" : "lightblue"}
          stroke="black"
          onClick={() => handleNodeClick(node)}
        />
        <Text
          text={String(node.value)}
          x={node.x - 10}
          y={node.y - 8}
          fontSize={16}
          fill="black"
        />
      </React.Fragment>
    ));
  }, [positionedNodes, visitedNodesIDs, handleNodeClick]);

  return (
    <Stage width={canvasSize.width} height={canvasSize.height}>
      <Layer>
        {/* Draw all edges first */}
        {positionedNodes.map((node) => {
          const parent = positionedNodes.find((n) => n.id === node.parentId);
          if (!parent) return null;
          return (
            <Line
              key={`line-${node.id}`}
              points={[parent.x, parent.y, node.x, node.y]}
              stroke="black"
            />
          );
        })}

        {/* Draw all nodes and labels after */}
        {renderedNodes}
      </Layer>
    </Stage>
  );
}
