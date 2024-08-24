import React, { useState } from "react";
import '../styles/Projects.css';

export default function Projects({ showBackground }) {
    const [ filter, setFilter ] = useState("Highlight")

    const filterOptions = ["Highlight", "Python", "ReactJS"];

    const projects = [
        {
            title: "Semantle AI + NYTimes Connections Solver - HackCU Winner",
            date: "Spring 2024",
            url: "https://devpost.com/software/mega-problem-solver",
            description: [
                "Solved popular online puzzles and games using AI and machine learning techniques.",
                "Developed an AI solution utilizing Word2Vec vectorization, linear algebra and machine learning techniques to solve the word game Semantle in 3-4 guesses and increase winning chances in NYTimes game, Connections.",
                "Utilized unsupervised machine learning algorithms like K-Means Clustering to speed up the runtime when generating guesses by a projected 50% compared to initial attempts."
            ],
            tags: ["Python", "Highlight"]
        },
        {
            title: "AI PDF Summariser",
            date: "Spring 2023",
            url: "https://github.com/mr2wei/AI-PDF-Summariser",
            description: [
                "Utilised LLMs to assist in reading, summarising and understanding PDF documents such as academic papers.",
                "Optimized notetaking during textbook reading, resulting in a time savings of over 2 hours weekly, while enhancing overall comprehension; gaining interest from 10+ individuals for further developments.",
                "Integrated OpenAI's API into a React JS application, enabling dynamic interactions and real-time response generation, boosting the app's functionality and user experience."
            ],
            tags: ["ReactJS", "Highlight"]
        },
        {
            title: "Discord Music Bot",
            date: "Fall 2022",
            url: "https://github.com/mr2wei/Discord-Spotify-radio-bot",
            description: [
                "Created a discord bot to simplify and improve playing music experience on Discord.",
                "Designed and implemented a Discord music bot featuring intuitive UI/UX functions, enhanced recommender algorithms and seamless listening experience.",
                "Integrated multiple APIs including Spotify, yt-dlp, Google Search, and Sponsorblock with Python, diversifying the bot's capabilities and significantly enhancing versality and functionality."
            ],
            tags: ["Python", "Highlight"]
        }
    ];


    return (
        <div id="projects" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            <div className="container">
                <div className="title">
                    <h1>Projects</h1>
                </div>
                <div className="filter">
                    {
                        filterOptions.map((filterOption, index) => (
                            <button onClick={() => setFilter(filterOption)} className={filter === filterOption ? "active" : ""} key = {index}>{filterOption}</button>
                        ))
                    }
                </div>
                <div className="full-content">
                    {projects.filter(project => project.tags.includes(filter)).map((project, index) => (
                        <div key={index} className={`text-content-container project-item ${showBackground ? '' : 'simple'}`} onClick={() => window.open(project.url, '_blank')}>
                            <h2 className="item-header">{project.title}</h2>
                            <div className="item-subtitle">
                                <h3 className="item-date">{project.date}</h3>
                            </div>
                            <div className="item-description">
                                <ul>
                                    {project.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="image-credit">
                    Photo of the Orion Nebula by Me.
                </div>
            </div>
        </div>
    )
}