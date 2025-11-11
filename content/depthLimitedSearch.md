# Iterative Deepening Search (IDS)

## Why Use Iterative Deepening?

Depth-limited search can prevent infinite paths in depth-first search, but choosing the right depth limit is tricky. If the limit is too low, the algorithm may miss the solution. Iterative Deepening Search (IDS) solves this by trying all depth limits incrementally: first 0, then 1, then 2, and so on—until a solution is found or the search fails completely.

## How IDS Works

Each iteration of IDS performs a depth-limited search with a higher limit than the previous one. This mimics breadth-first search in terms of completeness and optimality, but uses less memory.

- **Memory usage**: Like DFS, IDS uses `O(b * d)` space.
- **Completeness**: IDS is complete on finite acyclic graphs, or any finite graph if cycles are checked.
- **Optimality**: IDS is optimal when all actions have the same cost.

## Time and Space Complexity

- **Time complexity**: `O(b^d)` when a solution exists, or `O(b^m)` when there is none.
- **Space complexity**: `O(b * d)` — much better than breadth-first search.

## Efficiency vs Breadth-First Search

Breadth-first search stores all nodes in memory. IDS avoids this by **repeating previous levels**, saving memory at the cost of more time.

For example, consider a binary search tree where the solution is found at depth 4. IDS will perform 4 iterations, each exploring one more level.

## Is IDS Wasteful?

It may seem inefficient because nodes near the top are regenerated multiple times. But in most problems, **most nodes are at the bottom levels**, so the repeated effort at the top is minimal.

In IDS:
- Nodes at depth `d` are generated once.
- Nodes at depth `d-1` are generated twice.
- ...
- Children of the root are generated `d` times.

### Total Nodes Generated (Worst Case)

