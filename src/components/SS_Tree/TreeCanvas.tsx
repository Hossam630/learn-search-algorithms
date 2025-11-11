import { Stage, Layer, Text, Line } from "react-konva";
import { useMemo } from "react";
import type { TreeNode } from "../../../Types";

type PositionedNode = TreeNode & {
  x: number;
  y: number;
};

type TreeCanvasProps = {
  tree: TreeNode[] ;
  path?: string[];
  positionStrategy?: "relative" | "absolute";
  handleNodeClick?: (node: TreeNode) => void;
};

export default function TreeCanvas({
  tree,
  path = [],
  handleNodeClick,
  positionStrategy = "absolute",
}: TreeCanvasProps) {
  const positionedNodes = useMemo(() => {
    const spacingX = 120;
    const spacingY = 80;
    const depthMap = new Map<number, PositionedNode[]>();

    // Group nodes by depth
    tree.forEach((node) => {
      if (!depthMap.has(node.depth)) depthMap.set(node.depth, []);
      depthMap.get(node.depth)!.push({ ...node, x: 0, y: 0 });
    });

    // Assign positions
    const result: PositionedNode[] = [];
    depthMap.forEach((group, depth) => {
      group.forEach((node, index) => {
        const parentNodeX =
          depthMap
            .get(depth - 1)
            ?.find((node) => node.value === node.parentCity)?.x || 0;

        result.push({
          ...node,
          x:
            positionStrategy === "relative"
              ? parentNodeX + spacingX * (index - group.length / 2)
              : spacingX + index * spacingX,
          y: spacingY + depth * spacingY,
        });
      });
    });

    return result;
  }, [tree]);

  return (
    <Stage width={1000} height={1000}>
      <Layer>
        {/* Draw lines between parent and child */}
        {positionedNodes.map((node, i) => {
          const parent = positionedNodes.find(
            (n) => n.value === node.parentCity && n.depth === node.depth - 1
          );
          if (!parent) return null;
          const midX = (parent.x + 30 + node.x + 30) / 2;
          const midY = (parent.y + 20 + node.y) / 2;
          return (
            <>
              <Line
                key={`line-${i}`}
                points={[parent.x + 30, parent.y + 20, node.x + 30, node.y]}
                stroke="gray"
                strokeWidth={1}
              />
              <Text
                x={midX - 10}
                y={midY - 10}
                text={node.cost?String(node.cost):""} // or any label
                fontSize={14}
                fill="black"
              />
            </>
          );
        })}

        {/* Draw city labels */}
        {positionedNodes.map((node, i) => (
          <Text
            key={`text-${i}`}
            text={node.value}
            x={node.x}
            y={node.y}
            fontSize={16}
            fill={path[node.depth] === node.value ? "red" : "black"}
            onClick={() => {
              if (handleNodeClick) {
                handleNodeClick(node);
              }
            }}
          />
        ))}
      </Layer>
    </Stage>
  );
}
