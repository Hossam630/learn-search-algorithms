# Breadth-First Search (BFS) Explained

## What Is Breadth-First Search?

Breadth-first search (BFS) is a strategy used when all actions have the same cost. It works by expanding the root node first, then all its direct successors, followed by their successors, and so on. This method explores the search space level by level and is guaranteed to find a solution if one exists—even in infinite state spaces.

## How BFS Can Be Implemented

BFS can be implemented using a best-first search approach, where the evaluation function `f(n)` is simply the depth of the node (i.e., the number of steps from the root). However, a more efficient way is to use a first-in-first-out (FIFO) queue. This ensures that shallower nodes are expanded before deeper ones, which matches the BFS strategy.

## Efficiency Tricks

To improve performance:
- Use a **FIFO queue** instead of a priority queue for faster operations.
- Use a **set of reached states** instead of a full mapping, since once a state is reached, there's no need to revisit it.
- Apply an **early goal test**—check if a node is a solution as soon as it's generated, rather than waiting until it's removed from the queue.

## Why BFS Is Cost-Optimal

BFS always finds the solution with the fewest steps because it explores all nodes at depth `d` only after exploring all nodes at depth `d - 1`. This makes it **cost-optimal** for problems where every action has the same cost. However, it’s not optimal for problems with varying action costs.

## Time and Space Complexity

In a uniform tree where each node has `b` children and the solution is at depth `d`, the total number of nodes generated is:

1 + b + b² + b³ + ... + bᵈ = O(bᵈ)
