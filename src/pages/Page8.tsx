import { Link } from "react-router-dom";


export default function Page7() {

  return (
    <>


  <h1>🔍 Summary of Search Algorithms</h1>

  <table>
    <thead>
      <tr>
        <th>Algorithm</th>
        <th>Completeness</th>
        <th>Optimal Cost</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Breadth-First Search</td>
        <td>✅ Yes (finite space)</td>
        <td>✅ Yes (if costs equal)</td>
        <td>O(b<sup>d</sup>)</td>
        <td>O(b<sup>d</sup>)</td>
      </tr>
      <tr>
        <td>Depth-First Search</td>
        <td>❌ No (infinite paths)</td>
        <td>❌ No</td>
        <td>O(b<sup>m</sup>)</td>
        <td>O(m)</td>
      </tr>
      <tr>
        <td>Depth-Limited Search</td>
        <td>❌ No (if limit too low)</td>
        <td>❌ No</td>
        <td>O(b<sup>ℓ</sup>)</td>
        <td>O(ℓ)</td>
      </tr>
      <tr>
        <td>Iterative Deepening</td>
        <td>✅ Yes</td>
        <td>✅ Yes (if costs equal)</td>
        <td>O(b<sup>d</sup>)</td>
        <td>O(b × d)</td>
      </tr>
      <tr>
        <td>Uniform-Cost Search</td>
        <td>✅ Yes</td>
        <td>✅ Yes</td>
        <td>O(b<sup>1 + C/ε</sup>)</td>
        <td>O(b<sup>1 + C/ε</sup>)</td>
      </tr>
      <tr>
        <td>Bidirectional Search</td>
        <td>✅ Yes (if both directions complete)</td>
        <td>✅ Yes (with path cost)</td>
        <td>O(b<sup>d/2</sup>)</td>
        <td>O(b<sup>d/2</sup>)</td>
      </tr>
    </tbody>
  </table>

  <h2>🧠 Key Terms</h2>
  <ul>
    <li><strong>b</strong>: Branching factor (average number of successors per node)</li>
    <li><strong>d</strong>: Depth of the optimal solution</li>
    <li><strong>m</strong>: Maximum depth of the search space</li>
    <li><strong>ℓ</strong>: Depth limit in depth-limited search</li>
    <li><strong>C</strong>: Cost of the optimal solution</li>
    <li><strong>ε</strong>: Minimum action cost (must be &gt; 0)</li>
  </ul>
      <footer className="footer">
        <Link className="prev" to="/bidirectional-search">Prev:Bi-directional search</Link>
       </footer>
    </>
  );
}