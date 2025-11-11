import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="/performance-measurement" element={<Page2/>} />
            <Route path="/depth-first-search" element={<Page3/>} />
            <Route path="/breadth-first-search" element={<Page4 />} />
            <Route path="/dijkstra" element={<Page5 />} />
            <Route path="/depth-limted-search" element={<Page6 />} />
            <Route path="/bidirectional-search" element={<Page7 />} />
            <Route path="/summary" element={<Page8 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
