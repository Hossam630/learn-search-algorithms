This means both **time and space complexity** are exponential: `O(b^d)`.

## Real-World Example

Imagine a problem with:
- Branching factor `b = 10`
- Processing speed of 1 million nodes/second
- Memory usage of 1 KB per node

Searching to depth `d = 10` would take under 3 hours but require **10 terabytes of memory**. At depth `d = 14`, even with unlimited memory, the search would take **3.5 years**.

## The Challenge of Exponential Growth

Because of its exponential growth in time and memory, BFS is impractical for large problems unless the depth is small. Uninformed search strategies like BFS struggle with complex problems due to these limitations.
