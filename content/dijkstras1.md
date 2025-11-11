
This can be much larger than `O(b^d)` because the algorithm may explore many low-cost paths before considering higher-cost but more useful ones.

## When It Resembles BFS

If all actions have equal cost, uniform-cost search behaves like breadth-first search. In that case, the complexity becomes `O(b^(d+1))`.

## Why Use Uniform-Cost Search?

Uniform-cost search is **complete** and **cost-optimal**. It always finds the cheapest path to the goal and avoids infinite loops, as long as all action costs are greater than zero.
