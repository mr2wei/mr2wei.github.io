import React, { useState, useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ activeSection }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (window.innerHeight <= 450) {
            return;
        }
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 40) {
                setIsCollapsed(false);
            } else if (currentScrollY > lastScrollY) {
                setIsCollapsed(true);
            } else if (currentScrollY < lastScrollY - 20) {
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
            setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`navbar ${isMobileMenuOpen ? 'mobile-expanded' : ''}`}
            id={isCollapsed || (window.innerHeight <= 450 || window.innerWidth <= 768) ? 'collapsed' : ''}
        >
            <div className="desktop-nav">
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
            </div>

            <div className="mobile-nav">
                <div className="navbar-header">
                    <div className="hamburger-menu" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/weijiang08/">
                            <IoLogoLinkedin />
                        </a>
                    </div>
                </div>

                <div className={`page-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
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
            </div>
        </nav>
    )
}
