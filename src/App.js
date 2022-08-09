import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Quotes from './components/Quotes';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          {/* Home Component */}
          <Route path="/" element={<Home />} />
          {/* Calculator Component */}
          <Route path="/calculator" element={<CalculatorPage />} />
          {/* Quotes Component */}
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
