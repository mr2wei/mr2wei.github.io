import React from "react";
import resume from '../assets/resume/Wei resume.pdf'
import '../styles/Experience.css';


export default function Experience({ showBackground }) {
    const workExperiences = [
        {
            company: "Keysight Technologies",
            title: "R&D Software Engineering Intern",
            date: "June 2024 - August 2024",
            description: [
                "Developed an advanced chatbot from end-to-end with Azure, TypeScript, ReactJS and Flask to streamline the support ticket system on Jira, cutting response times from 3 days to just 30 seconds, improving user experience for issue reporting and enhancement requests.",
                "Engineered a Retrieval-Augmented Generation (RAG) and conversation system using a combination of chat and embedding models along with NLP techniques through LangChain and NLTK, enhancing quality of response and user interaction.",
                "Chatbot outperformed Confluence search, delivering more relevant and accurate results for natural language queries by 80%."
            ],
            keywords: ["Azure", "TypeScript", "ReactJS", "Flask", "Jira", "Retrieval-Augmented Generation", "RAG", "NLP", "LangChain", "NLTK"],
            tags: ["ReactJS", "AI", "API"]
        },
        {
            company: "University of Colorado Boulder",
            title: "Learning Assistant",
            date: "January 2023 - Present",
            description: [
                "Mentored over 200 students across 4 semesters in foundational programming concepts including basic data structures, object-oriented programming, and debugging techniques through weekly office hours and recitation sessions",
                "Provided one-on-one tutoring support for students struggling with programming assignments, helping debug code and explaining fundamental CS concepts",
                "Collaborated with instructors to refine curriculum and office hours based on observed student challenges, resulting in additional mid‑term review sessions, revised assignment structure, and topic focused office hours.",
                "Completed pedagogical training on active learning strategies and inclusive teaching practices to create supportive learning environments for diverse student backgrounds"
            ],
            keywords: ["teaching", "tutoring", "computer science"],
            tags: ["C++"]
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
                    <h1>Work Experience</h1>
                </div>
                {workExperiences.map((exp, index) => (
                    <div key={`work-${index}`} className={`text-content-container experience-item ${showBackground ? '' : 'simple'}`}>
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
                        {exp.tags && exp.tags.length > 0 && (
                            <div className="item-tags">
                                <ul className="tag-list">
                                    {exp.tags.map((tag, i) => (
                                        <li key={i} className={`tag ${tag}-tag`}>#{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
                <div className="spacer"></div>
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