import React, { useState } from 'react';
import './App.css';
import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Loader from './components/Loader/Loader';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
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
      
      {loading && <Loader />}
      
      {showPortfolio && <Portfolio portfolioData={formData} />}
    </div>
  );
}

export default App;