import React from "react";
import aboutImage from "../../assets/images/selfImage.png"; // Import the image
import '../../styles/Introduction.css';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function Intro ({ showBackground }) { 
    return(
        <div id="introduction" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            {
                window.innerWidth <= 768 && (
                <div className='size-warning'><IoAlertCircleOutline /> This page works best in landscape or a larger screen</div>
                )
            }
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
                <div className="image-credit">
                    Photo of the US 36 Highway in Colorado by Me.
                </div>
            </div>
        </div>
    )   
}