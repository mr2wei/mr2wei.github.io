import React, { useState, useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

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

    const navItems = [
        { href: "#introduction", key: "introduction", label: "Intro" },
        { href: "#publications", key: "publications", label: "Publications" },
        { href: "#research", key: "research", label: "Research" },
        { href: "#experience", key: "experience", label: "Experience" },
        { href: "#projects", key: "projects", label: "Projects" },
        { href: "#photography", key: "photography", label: "Photography" },
        // { href: "https://mr2wei.github.io/AI-PDF-Summariser", key: "pdf-ai", label: "PDF AI", external: true },
    ];

    const renderNavItems = () =>
        navItems.map((item) => (
            <div className="navbar-item" key={item.key}>
                <a
                    href={item.href}
                    onClick={item.external ? undefined : handleScroll(item.href)}
                    className={activeSection === item.key ? "navbar-active" : ""}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                    {item.label}
                </a>
            </div>
        ));

    return (
        <nav
            className={`navbar ${isMobileMenuOpen ? 'mobile-expanded' : ''}`}
            id={isCollapsed || (window.innerHeight <= 450 || window.innerWidth <= 900) ? 'collapsed' : ''}
        >
            <div className="desktop-nav">
                <div className="page-navigation">
                    {renderNavItems()}
                </div>
                <div className="social-media">
                    <a
                        href="https://scholar.google.com/citations?user=iM7rjYgAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Google Scholar"
                        title="Google Scholar"
                    >
                        <FaGoogleScholar />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/weijiang08/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
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
                        <a
                            href="https://scholar.google.com/citations?user=iM7rjYgAAAAJ&hl=en"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Google Scholar"
                            title="Google Scholar"
                        >
                            <FaGoogleScholar />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/weijiang08/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <IoLogoLinkedin />
                        </a>
                    </div>
                </div>

                <div className={`page-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    {renderNavItems()}
                </div>
            </div>
        </nav>
    )
}
