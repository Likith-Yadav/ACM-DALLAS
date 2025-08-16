import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Officers from './pages/Officers';
import Apply from './pages/Apply';
import Events from './pages/Events';
import Connect from './pages/Connect';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0912] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/events" element={<Events />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

