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
                "Developed a chatbot to assist the support ticket process on Jira, cutting response times from 3 days to a mere 30 seconds.",
                "Employed a robust combination of Azure, Whoosh, ReactJS, language and embedding models, and NLP techniques via LangChain and NLTK to construct a reliable Retrieval-Augmented Generation (RAG) conversational system.",
                "Chatbot outperformed Confluence search, delivering more relevant results for 90% of natural language queries."
            ]
        },
        {
            company: "Collaborative AI and Robotics Lab (CAIRO), Human Interaction & Robotics Group (HIRO)",
            title: "Undergraduate Researcher",
            date: "October 2023 - Present",
            description: [
                "Collaborating with the lab on a research project focused on simulation to reality transfer of robot learning via diverse training environment generation.",
                "Currently researching the causal effects of robot movements on human actions during human-robot teaming by using object detection models such as YOLOv8 to identify humans and their behaviours around a moving robot.",
                "Contributed to research and co-authored a conference paper on Causal Influence detection in Human-Robot Interactions for Causal-HRI 2024."
            ]
        }
    ];
    
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
                                        <li key={i}>{desc}</li>
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
                    <a className="half-content-button" href={resume} download = "Wei resume.pdf">
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