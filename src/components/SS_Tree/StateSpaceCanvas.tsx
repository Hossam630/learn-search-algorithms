import { Stage, Layer, Circle, Text, Line, Group } from "react-konva";
import { useState } from "react";
import { romaniaGraph } from "../../data/romaniaMap";

export default function StateSpaceCanvas({
  onCityClick,
  path,
  cityPositions,
}: {
  onCityClick: (city: string) => void;
  path: string[];
  cityPositions: Record<string, { x: number; y: number }>;
}) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Build unique undirected edges from the romaniaGraph and the positions map
  const edges: {
    points: number[];
    from: string;
    to: string;
    weight: number;
  }[] = [];
  const seen = new Set<string>();
  for (const [city, neighborNodes] of Object.entries(romaniaGraph)) {
    for (const neighbor of neighborNodes) {
      const n = neighbor.child;
      const weight = neighbor.weight;
      // both endpoints must have positions
      const a = cityPositions[city];
      const b = cityPositions[n];
      if (!a || !b) continue;
      const key = [city, n].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ points: [a.x, a.y, b.x, b.y], from: city, to: n, weight }); // Added weight here
    }
  }

  return (
    <Stage width={900} height={500}>
      <Layer>
        {/* draw edges first so circles are on top */}
        {edges.map((e, idx) => {
          const midX = (e.points[0]  + e.points[2] ) / 2;
          const midY = (e.points[1] + e.points[3]) / 2;
          return (
            <>
              <Line
                key={`edge-${idx}`}
                points={e.points}
                stroke={"#666"}
                strokeWidth={2}
              />
              <Text
                x={midX - 10}
                y={midY - 10}
                text={String(e.weight)} // or any label
                fontSize={14}
                fill="black"
              />
            </>
          );
        })}
        {Object.entries(cityPositions).map(([city, pos]) => {
          const color =
            hoveredCity === city
              ? "orange"
              : path.includes(city)
              ? "red"
              : "blue";
          return (
            <Group key={city}>
              <Circle
                x={pos.x}
                y={pos.y}
                radius={10}
                fill={color}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => onCityClick(city)}
              />
              <Text
                text={city}
                x={cityPositions[city].x + 15}
                y={cityPositions[city].y}
                fontSize={14}
                fill="black"
              />
            </Group>
          );
        })}
      </Layer>
    </Stage>
  );
}
