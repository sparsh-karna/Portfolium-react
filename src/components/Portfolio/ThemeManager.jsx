import React from 'react';
import './ThemeManager.css';

// Theme-specific components
import NetflixTheme from './themes/NetflixTheme';
import GoogleTheme from './themes/GoogleTheme';
import AppleTheme from './themes/AppleTheme';
import MicrosoftTheme from './themes/MicrosoftTheme';
import AmazonTheme from './themes/AmazonTheme';
import MetaTheme from './themes/MetaTheme';
import TwitterTheme from './themes/TwitterTheme';
import SpotifyTheme from './themes/SpotifyTheme';
import NeutralTheme from './themes/NeutralTheme';

const ThemeManager = ({ theme, portfolioData }) => {
  const renderTheme = () => {
    switch (theme) {
      case 'netflix':
        return <NetflixTheme portfolioData={portfolioData} />;
      case 'google':
        return <GoogleTheme portfolioData={portfolioData} />;
      case 'apple':
        return <AppleTheme portfolioData={portfolioData} />;
      case 'microsoft':
        return <MicrosoftTheme portfolioData={portfolioData} />;
      case 'amazon':
        return <AmazonTheme portfolioData={portfolioData} />;
      case 'meta':
        return <MetaTheme portfolioData={portfolioData} />;
      case 'twitter':
        return <TwitterTheme portfolioData={portfolioData} />;
      case 'spotify':
        return <SpotifyTheme portfolioData={portfolioData} />;
      default:
        return <NeutralTheme portfolioData={portfolioData} />;
    }
  };

  return (
    <div className={`theme-container ${theme}-theme`}>
      {renderTheme()}
    </div>
  );
};

export default ThemeManager;