// src/components/ThemeToggle.tsx
import React, { useEffect } from 'react';

const ThemeToggle: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => {
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
      {/* La etiqueta puede ser vacía o incluir un texto adicional si deseas */}
    </label>
  );
};

export default ThemeToggle;