import React, { createContext, useState, useEffect } from 'react';

// Define available themes
export const themes = {
  netflix: 'netflix',
  github: 'github',
  spotify: 'spotify',
  discord: 'discord'
};

// Create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('portfolium-theme') || themes.netflix
  );

  // Update theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('portfolium-theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Function to toggle between themes
  const toggleTheme = (theme) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;