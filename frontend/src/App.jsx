import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NewLanding from './components/Landing/NewLanding';
import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Loader from './components/Loader/Loader';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [theme, setTheme] = useState('neutral'); // Default to neutral theme

  const handleFormSubmit = (data) => {
    setFormData(data);
    setTheme(data.theme || 'neutral'); // Set theme based on form data or default to neutral
    setLoading(true);

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
      setShowPortfolio(true);
    }, 1500);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewLanding />} />
        <Route path="/create" element={
          showPortfolio ? 
            <Navigate to="/portfolio" /> : 
            loading ? 
              <Loader theme={theme} /> : 
              <PortfolioForm onSubmit={handleFormSubmit} />
        } />
        <Route path="/portfolio" element={
          formData ? 
            <Portfolio data={formData} theme={theme} /> : 
            <Navigate to="/create" />
        } />
      </Routes>
    </Router>
  );
}

export default App;