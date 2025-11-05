import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SQLPage from './pages/SQLPage/SQLPage';
import BrokenAccessPage from './pages/BrokenAccessPage/BrokenAccessPage';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" element={<SQLPage />} />
            <Route path="/bac" element={<BrokenAccessPage />} />
            
          </Routes>

        </Router>
    
    </div>
  );
}

export default App;
