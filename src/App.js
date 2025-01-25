import BasicSite from './pages/BasicSite';
import AdvSite from './pages/AdvSite';
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BasicSite />} />
        <Route path="/interactive" element={<AdvSite />} />
      </Routes>
    </Router>
  );
}

export default App;