import React, { useState } from 'react';
import './App.css';
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
    <div className="App">
      {!showPortfolio && !loading && (
        <PortfolioForm onSubmit={handleFormSubmit} />
      )}

      {loading && <Loader theme={theme} />}

      {showPortfolio && <Portfolio portfolioData={formData} theme={theme} />}
    </div>
  );
}

export default App;