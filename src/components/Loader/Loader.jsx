import React from 'react';
import './Loader.css';

const Loader = ({ theme = 'neutral' }) => {
  return (
    <div className={`loader-container ${theme}-loader`}>
      <div className={`loader ${theme}-spinner`}></div>
    </div>
  );
};

export default Loader;