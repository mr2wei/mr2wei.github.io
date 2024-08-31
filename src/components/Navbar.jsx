import React, { useState, useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar({ activeSection }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(false);
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleScroll = (anchor) => (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const scrollToElement = document.querySelector(anchor);
        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav 
            className="navbar" 
            id = {isCollapsed ? 'collapsed' : ''}
        >
            <div className="page-navigation">
                <div className="navbar-item">
                    <a href="#introduction" onClick={handleScroll('#introduction')} className={activeSection === 'introduction' ? 'navbar-active' : ''}>Intro</a>
                </div>
                <div className="navbar-item">
                    <a href="#experience" onClick={handleScroll('#experience')} className={activeSection === 'experience' ? 'navbar-active' : ''}>Experience</a>
                </div>
                <div className="navbar-item">
                    <a href="#projects" onClick={handleScroll('#projects')} className={activeSection === 'projects' ? 'navbar-active' : ''}>Projects</a>
                </div>
                <div className="navbar-item">
                    <a href="#photography" onClick={handleScroll('#photography')} className={activeSection === 'photography' ? 'navbar-active' : ''}>Photography</a>
                </div>
                <div className="navbar-item">
                    <a href="https://mr2wei.github.io/AI-PDF-Summariser" className={activeSection === 'pdf-ai' ? 'navbar-active' : ''}>PDF AI</a>
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/weijiang08/">
                    <IoLogoLinkedin />
                </a>
            </div>
        </nav>
    )
}
