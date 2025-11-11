import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breadth-first-search">Breadth First Search</Link>
        </li>
        <li>
          <Link to="/depth-first-search">Depth First Search</Link>
        </li>
        <li>
          <Link to="/dijkstra">Dijkstra's Algorithm</Link>
        </li>
        <li>
          <Link to="/state-space">State Space Tree</Link>
        </li>
      </ul>
    </nav>
  );
}