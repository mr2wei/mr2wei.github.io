import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar({ activeSection }) {
    const handleScroll = (anchor) => (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const scrollToElement = document.querySelector(anchor);
        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div id="navbar">
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
                {/* <div className="navbar-item">
                    <a href="#photography" onClick={handleScroll('#photography')} className={activeSection === 'photography' ? 'navbar-active' : ''}>Photography</a>
                </div> */}
                <div className="navbar-item">
                    <a href="https://mr2wei.github.io/AI-PDF-Summariser" onClick={handleScroll('https://mr2wei.github.io/AI-PDF-Summariser')} className={activeSection === 'pdf-ai' ? 'navbar-active' : ''}>PDF AI</a>
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/weijiang08/">
                    <IoLogoLinkedin />
                </a>
            </div>
        </div>
    )
}
