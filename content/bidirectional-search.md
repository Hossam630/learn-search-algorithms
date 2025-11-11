# Bidirectional Search

## What Is Bidirectional Search?

Bidirectional search is an alternative to traditional search algorithms. Instead of searching only from the initial state toward the goal, it searches **forward from the start** and **backward from the goal** simultaneously. The goal is for the two searches to meet in the middle.

## Why Use Bidirectional Search?

The main advantage is efficiency. If the branching factor is `b` and the solution depth is `d`, then:

- Unidirectional search explores up to `b^d` nodes.
- Bidirectional search explores roughly `2 * b^(d/2)` nodes.

This can be **50,000 times fewer nodes** when `b = d = 10`, resulting in major time and memory savings.

## How It Works

To implement bidirectional search, we need:

- Two **frontiers**: one for forward search, one for backward search.
- Two **reached tables** to track visited states in each direction.
- The ability to **reason backward**: if state `s'` is a successor of `s` in the forward direction, we must also know how to reverse that relationship.

A solution is found when the two frontiers **collide**—i.e., they reach the same state from opposite directions.

## Variants of Bidirectional Search

Just like unidirectional search, bidirectional search has many variants. One powerful version is **bidirectional best-first search**, which expands the node with the **lowest evaluation value** across both frontiers.

## Bidirectional Uniform-Cost Search

If the evaluation function is **path cost**, the algorithm becomes **bidirectional uniform-cost search**. In this case:

- No node with cost greater than `C/2` (where `C` is the cost of the optimal path) will be expanded.
- This leads to a **significant speedup** compared to unidirectional search.

## How the Algorithm Is Structured

The general algorithm uses:

- Two versions of the problem: one for forward search (`F`) and one for backward search (`B`).
- Two evaluation functions: `f_F` and `f_B`.

If the evaluation function is path cost, the first solution found is guaranteed to be **optimal**. But with other evaluation functions, this may not be true.

## Tracking the Best Solution

Because non-cost-based evaluation functions may not guarantee optimality, the algorithm:

- Keeps track of the **best solution found so far**.
- May update this solution multiple times.
- Uses a **termination test** to confirm that no better solution is possible before stopping.
