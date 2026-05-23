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
                        I recently graduated with a B.S. in Computer Science from the University of Colorado Boulder
                        <br />
                        <br />
                        I've built end-to-end AI applications and full-stack web systems, working from backend APIs to frontend interfaces, with a focus on integrating language models, retrieval systems, and computer vision into practical tools. My research spans visual memory for autonomous robots, vision-based grasping, and human-robot interaction, with co-authored publications at ICRA 2026 and the Causal-HRI workshop. Outside of CS, I'm into photography, bouldering, board games, and good food 😋.
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