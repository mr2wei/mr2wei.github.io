import React from "react";
import resume from '../assets/resume/Wei resume.pdf'
import '../styles/Experience.css';


export default function Experience({ showBackground }) {
    const experiences = [
        {
            company: "Keysight Technologies",
            title: "R&D Software Engineering Intern",
            date: "June 2024 - August 2024",
            description: [
                "Developed an advanced chatbot from end-to-end with Azure, TypeScript, ReactJS and Flask to streamline the support ticket system on Jira, cutting response times from 3 days to just 30 seconds, improving user experience for issue reporting and enhancement requests.",
                "Engineered a Retrieval-Augmented Generation (RAG) and conversation system using a combination of chat and embedding models along with NLP techniques through LangChain and NLTK, enhancing quality of response and user interaction.",
                "Chatbot outperformed Confluence search, delivering more relevant and accurate results for natural language queries by 80%."
            ],
            keywords: ["Azure", "TypeScript", "ReactJS", "Flask", "Jira", "Retrieval-Augmented Generation", "RAG", "chat models", "embedding models", "NLP", "LangChain", "NLTK"]
        },
        {
            company: "Collaborative AI and Robotics Lab (CAIRO), Human Interaction & Robotics Group (HIRO)",
            title: "Research Assistant",
            date: "October 2023 - Present",
            description: [
                "Currently working with lab on better human intention prediction in assistive tech for wheelchair users using OpenCV and Graspnet for object and grasp recognition through depth camera data.",
                "Assisted in research of causal effects of robot movements on human actions during human-robot teaming by using object detection models such as FairMOT to identify humans and their behaviours around a moving robot.",
                "Contributed to research and co-authored a workshop paper on Causal Influence detection in Human-Robot Interactions for Causal-HRI 2024."
            ],
            keywords: ["OpenCV", "Graspnet", "object recognition", "grasp recognition", "depth camera", "FairMOT", "human-robot teaming", "Causal-HRI"]
        },
        {
            company: "University of Colorado Boulder",
            title: "Learning Assistant",
            date: "January 2023 - Present",
            description: [
                "Coordinated with professors and teaching assistants in helping over 500 students in CU's Intro to Computer Science, tutoring course concepts and providing aid to student's projects and assignments during office hours.",
                "Applied specialized training and adopted effective communication methods to effectively address student's learning needs."
            ],
            keywords: ["teaching", "tutoring", "computer science", "student support"]
        }
    ];
    const boldKeywords = (text, keywords) => {
        if (!keywords || keywords.length === 0) return text;

        // Sort keywords by length descending to process longer ones first
        const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
        let elements = [text];

        sortedKeywords.forEach(keyword => {
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedKeyword})`, 'g');

            elements = elements.flatMap(element => {
                if (typeof element === 'string') {
                    const parts = element.split(regex);
                    return parts.map((part, index) => 
                        part === keyword ? 
                        <strong key={`${keyword}-${index}`}>{part}</strong> : 
                        part
                    );
                }
                return element;
            });
        });

        return elements;
    };

    const openResume = () => {
        window.open(resume, '_blank');
    }

    return (
        <div id="experience" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            <div className="container">
                <div className="title">
                    <h1>Experience</h1>
                </div>
                <div className="full-content">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`text-content-container ${showBackground ? '' : 'simple'}`}>
                            <h2 className="item-header">{exp.company}</h2>
                            <div className="item-subtitle">
                                <h3 className="item-title">{exp.title}</h3>
                                <h3 className="item-date">{exp.date}</h3>
                            </div>
                            <div className="item-description">
                                <ul>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>
                                            {boldKeywords(desc, exp.keywords)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content">
                    <a className="accented-half-content-button" onClick={openResume}>
                        View Full Resume
                    </a>
                    <a className="half-content-button" href={resume} download="Wei resume.pdf">
                        Download Resume
                    </a>
                </div>
                <div className="image-credit">
                    Photo of University of Colorado's Buff Bus by Me.
                </div>
            </div>
        </div>
    )
}