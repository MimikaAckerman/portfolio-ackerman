// src/components/ThemeToggle.tsx

import React, { useEffect } from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <label>
      <input
        type="checkbox"
        className="theme-checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
    </label>
  );
};

export default ThemeToggle;