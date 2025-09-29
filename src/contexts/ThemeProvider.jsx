import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Force apply theme to document
    const root = document.documentElement;
    
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      root.style.setProperty('--theme-bg', '#111827');
      root.style.setProperty('--theme-text', '#f9fafb');
    } else {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('dark');
      root.style.setProperty('--theme-bg', '#ffffff');
      root.style.setProperty('--theme-text', '#111827');
    }
    
    // Force body background
    document.body.style.backgroundColor = isDark ? '#111827' : '#ffffff';
    document.body.style.color = isDark ? '#f9fafb' : '#111827';
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
