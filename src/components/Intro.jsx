import React from "react";
import aboutImage from "../assets/images/selfImage.png"; // Import the image
import '../styles/Introduction.css';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function Intro({ showBackground }) {
    return (
        <div id="introduction" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            <div className="container">

                <div className="title">
                    <h1>Hi, I'm Wei</h1>
                </div>
                <div className="content">
                    <div className={`small-text-content-container ${showBackground ? '' : 'simple'}`}>
                        I am currently a junior at the University of Colorado Boulder, pursuing a major in Computer Science. With skills in C++, Java, and Python developed through diverse projects in front-end development and data science, as well as past internship. Passionate about exploring software development and improving knowledge of artificial intelligence.
                        I am also a photographer ready to take my hobby to the next level.
                    </div>
                    <div className={`small-image-content-container ${showBackground ? '' : 'simple'}`}>
                        <img className="image" src={aboutImage} alt="A portrait of Wei Jiangs" /> {/* Use the imported image */}
                    </div>
                </div>

                <div className="spacer"></div>

                <div className={`text-content-container ${showBackground ? '' : 'simple'}`}>
                    <h2 className="item-header">Education</h2>
                    <div className="item-subtitle">
                        <h3 className="item-title">University of Colorado Boulder</h3>
                        <h3 className="item-date">Expected May 2026</h3>
                    </div>
                    <div className="item-description">
                        <ul>
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Honors: Academic honors list, Dean&apos;s List (All Semesters)</li>
                            <li>GPA: 3.97 (CS Major: 4.0)</li>
                        </ul>
                    </div>
                </div>

                <div className={`text-content-container ${showBackground ? '' : 'simple'}`}>
                    <h2 className="item-header">Awards &amp; Honors</h2>
                    <div className="item-subtitle">&#8203;</div>
                    <div className="item-description">
                        <ul>
                            <li>Dean&apos;s List, University of Colorado Boulder — All Semesters</li>
                            <li>Undergraduate Research Opportunities Program (UROP), $2,000 — Summer 2025</li>
                            <li>Undergraduate Research Opportunities Program (UROP), $1,500 — AY 2025–2026</li>
                            <li>Summer Program for Undergraduate Research (SPUR), DLA Excellence Fund, $4,800 — Summer 2025</li>
                        </ul>
                    </div>
                </div>

                <div className="image-credit">
                    Photo of the US 36 Highway in Colorado by Me.
                </div>
            </div>
        </div>
    )
}