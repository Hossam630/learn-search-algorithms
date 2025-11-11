# Uniform-Cost Search (Dijkstra's Algorithm)

## What Is Uniform-Cost Search?

Uniform-cost search is a strategy used when actions have different costs. It selects the next node to expand based on the total cost from the starting point to that node. In theoretical computer science, this is known as **Dijkstra’s algorithm**, while in AI it’s called **uniform-cost search**.

## How It Differs from Breadth-First Search

Breadth-first search expands nodes level by level based on depth. Uniform-cost search expands nodes based on **path cost**, spreading out in waves of increasing cost rather than increasing depth.

## Example: Sibiu to Bucharest

Suppose you're trying to reach Bucharest from Sibiu. Sibiu connects to Rimnicu Vilcea (cost 80) and Fagaras (cost 99). The algorithm chooses Rimnicu Vilcea first, then adds Pitesti (cost 80 + 97 = 177).

Next, it expands Fagaras and adds Bucharest (cost 99 + 211 = 310). Although Bucharest is the goal, the algorithm only checks for goals when expanding nodes—not when generating them—so it doesn’t stop yet.

It then expands Pitesti and finds another path to Bucharest (cost 80 + 97 + 101 = 278), which is cheaper. This new path replaces the previous one in the frontier. When Bucharest is finally expanded, the algorithm recognizes it as the goal and returns the optimal path.

## Why Goal Testing Timing Matters

If the algorithm had checked for the goal when generating nodes, it would have returned the more expensive path through Fagaras. By waiting until expansion, it ensures the lowest-cost path is selected.

## Time and Space Complexity

Let:
- `C` be the cost of the optimal solution.
- `ε` be the smallest possible cost of any action (must be > 0).

Then the worst-case complexity is:

