import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Hobbies from '../components/Hobbies/Hobbies';
import ThemeToggle
 from '../components/DarkMode/ThemeToggle';
const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> {/* Usa ThemeToggle */}
      <Header />
      <Projects />
      <Experience />
      <Hobbies />
    </div>
  );
};

export default Home;