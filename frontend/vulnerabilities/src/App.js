import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import RolePage from './pages/RolePage/RolePage';
import AccountDetailsPage from './pages/AccountDetailsPage/AccountDetailsPage';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:role/actions" element={<RolePage />} />
            <Route path="/account-details/:id" element={<AccountDetailsPage />} />

            
            
          </Routes>

        </Router>
    
    </div>
  );
}

export default App;
