# Evaluating Search Algorithms

Before designing or choosing a search algorithm, it's important to understand how to evaluate its performance. There are four key criteria:

---

## Completeness

**Definition**: Will the algorithm always find a solution if one exists? Will it correctly report failure if no solution exists?

- In **finite state spaces**, completeness is easier to achieve. As long as the algorithm avoids cycles (e.g., Arad → Sibiu → Arad), it can eventually explore all reachable states.
- In **infinite state spaces**, completeness is more challenging. For example:
  - Repeatedly applying a factorial operation (e.g., `4 → 4! → (4!)! → ...`) leads to an infinite path.
  - Moving endlessly in one direction on an infinite grid also creates an infinite path.
- In both cases, the algorithm never revisits a state but still fails to explore the entire space, making it **incomplete**.

To be complete in infinite spaces, the algorithm must **systematically explore** all reachable states. For example, a spiral pattern on a grid ensures that all cells are eventually visited.

> Note: In an infinite space with no solution, a complete algorithm must search forever—it cannot terminate early.

---

## Cost Optimality

**Definition**: Does the algorithm find the solution with the **lowest path cost** among all possible solutions?

- This is important when multiple solutions exist but we want the most efficient or least expensive one.
- Not all algorithms guarantee optimality—some may return the first solution found, regardless of cost.

---

##  Time Complexity

**Definition**: How long does the algorithm take to find a solution?

- Measured in:
  - **Seconds** (in practice)
  - **Number of states/actions considered** (in theory)
- Depends on the size and structure of the state space.

---

## Space Complexity

**Definition**: How much memory does the algorithm use during the search?

- Important for large or infinite state spaces.
- Algorithms like breadth-first search can consume a lot of memory, while depth-first search is more memory-efficient.

---

## Measuring Problem Difficulty

In theoretical computer science, problem difficulty is often measured by the size of the **state-space graph**:

- **V**: Number of vertices (states)
- **E**: Number of edges (state/action transitions)

This is useful when the graph is **explicitly defined**, such as a map.

In many AI problems, the graph is **implicit**, defined by:

- **Initial state**
- **Actions**
- **Transition model**

In such cases, complexity is measured using:

- **d**: Depth of the optimal solution
- **m**: Maximum depth of any path
- **b**: Branching factor (number of successors per node)

These parameters help estimate the algorithm’s time and space requirements.

