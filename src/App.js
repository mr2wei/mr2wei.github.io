import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { debounce } from 'lodash';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = ['introduction', 'experience', 'projects']; // Add more section IDs as needed
      let closestSection = '';
      let smallestDistance = Infinity;

      sections.forEach(sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const distance = Math.abs(sectionElement.getBoundingClientRect().top);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestSection = sectionId;
          }
        }
      });

      setActiveSection(closestSection);
    }, 400); // Debounce time of 100 milliseconds

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar activeSection = {activeSection}/>
      <Intro showBackground={activeSection === 'introduction'} />
      <Experience showBackground={activeSection === 'experience'} />
      <Projects showBackground={activeSection === 'projects'} />
    </div>
  );
}

export default App;