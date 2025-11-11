# Depth-First Search Explained

## What Is Depth-First Search?

Depth-first search (DFS) is a strategy that always explores the deepest node in the frontier first.

## How DFS Works

DFS dives straight down the search tree until it reaches a node with no successors. When that happens, it backtracks to the next deepest node that still has unexplored paths. It’s not guaranteed to find the cheapest solution—it simply returns the first one it finds.

## DFS in Different State Spaces

In finite tree-shaped spaces, DFS is both efficient and complete. In acyclic spaces, it may revisit the same state multiple times but will eventually explore everything. In cyclic spaces, DFS can loop forever unless it checks for cycles. In infinite spaces, it can get stuck going down an endless path, making it incomplete.

## Why Use DFS?

Despite its limitations, DFS is popular because it uses very little memory. Unlike breadth-first search, which expands like a growing sphere, DFS only keeps track of a narrow path—like a radius of that sphere. This makes it ideal for problems where memory is limited.

## DFS Performance

For a finite tree-shaped space, DFS takes time proportional to the number of states and uses memory proportional to \(O(bm)\), where \(b\) is the branching factor and \(m\) is the maximum depth. Problems that would need huge memory under breadth-first search can be solved with just kilobytes using DFS.

## Backtracking Search

Backtracking is a memory-saving variant of DFS. It generates one successor at a time and modifies the current state directly, avoiding the need to store multiple states. It only needs one state description and a path of actions, reducing memory from \(O(bm)\) to \(O(m)\).

## Cycle Detection and Efficiency

Backtracking can also include fast cycle detection using a set of current path states, allowing checks in constant time. To make backtracking work, each action must be reversible. This method is especially useful for solving problems with large state descriptions, such as robotic assembly.
