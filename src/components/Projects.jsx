import React, { useState } from "react";
import '../styles/Projects.css';

export default function Projects({ showBackground }) {
    const [filter, setFilter] = useState("Highlight")

    const filterOptions = ["Highlight", "Robotics", "Python", "C++", "CUDA", "ReactJS", "AI", "API", "All"];

    const projects = [
        {
            title: "Autonomous Grocery Shopping Robot",
            date: "Spring 2025",
            url: "https://github.com/weiiitt/Grocery-Shopper",
            description: [
                "Developed a dual-stage computer vision pipeline combining YOLO object detection with FastSAM segmentation for precise object segmentation, enabling real-time object identification and 3D coordinate extraction from RGBD camera streams.",
                "Built a manipulation system for 7-DOF TIAGo arm with inverse kinematics solver using ikpy, multi-waypoint trajectory planning, camera-to-robot coordinate transformations, and Cartesian space end-effector control for reliable pick-and-place operations."
            ],
            tags: ["Python", "AI", "Highlight", "Robotics", "All"]
        },
        {
            title: "Neural Network Framework with CUDA from Scratch",
            date: "December 2024 - Present",
            url: "https://github.com/mr2wei/cuda-nn-framework",
            description: [
                "Developed a modular neural network framework using CUDA and C++, gaining a deeper understanding of how neural networks function at a low level.",
                "Implemented fully connected layers, activation functions, forward and backward propagation, optimizers and loss functions.",
                "Gained hands-on experience with CUDA programming by writing custom kernels for forward/backward propagation, optimizers, and loss functions while exploring memory management, optimization, and parallelization in GPU environments.",
                "Future plans include adding support for Convolutional Layers and more to create Convolutional Neural Networks (CNNs) to enable image processing tasks."
            ],
            tags: ["C++", "CUDA", "Highlight", "AI", "All"]
        },
        {
            title: "Semantle AI + NYTimes Connections Solver - HackCU Winner",
            date: "March 2024",
            url: "https://devpost.com/software/mega-problem-solver",
            description: [
                "Solved popular online puzzles and games using AI and machine learning techniques.",
                "Developed an AI solution utilizing Word2Vec vectorization, linear algebra and machine learning techniques to solve the word game Semantle in 3-4 guesses and increase winning chances in NYTimes game, Connections.",
                "Utilized unsupervised machine learning algorithms like K-Means Clustering to speed up the runtime when generating guesses by a projected 50% compared to initial attempts."
            ],
            tags: ["Python", "Highlight", "AI", "API", "All"]
        },
        {
            title: "AI PDF Summariser",
            date: "January 2023 - Present",
            url: "https://github.com/mr2wei/AI-PDF-Summariser",
            description: [
                "Utilised LLMs to assist in reading, summarising and understanding PDF documents such as academic papers.",
                "Optimized notetaking during textbook reading, resulting in a time savings of over 2 hours weekly, while enhancing overall comprehension; gaining interest from 10+ individuals for further developments.",
                "Integrated OpenAI's API into a React JS application, enabling dynamic interactions and real-time response generation, boosting the app's functionality and user experience."
            ],
            tags: ["ReactJS", "Highlight", "AI", "API", "All"]
        },
        {
            title: "Discord Music Bot",
            date: "January 2022 - May 2023",
            url: "https://github.com/mr2wei/Discord-Spotify-radio-bot",
            description: [
                "Created a discord bot to simplify and improve playing music experience on Discord.",
                "Designed and implemented a Discord music bot featuring intuitive UI/UX functions, enhanced recommender algorithms and seamless listening experience.",
                "Integrated multiple APIs including Spotify, yt-dlp, Google Search, and Sponsorblock with Python, diversifying the bot's capabilities and significantly enhancing versality and functionality."
            ],
            tags: ["Python", "AI", "API", "All"]
        },
        {
            "title": "Discord Chat GPT Bot",
            "date": "June 2023 - November 2023",
            "url": "https://github.com/mr2wei/Discord-chat-gpt",
            "description": [
                "Chat GPT built straight into your discord text channels.",
                "With quick chat creation and deletion tools, it allows you to utilise ChatGPT in a familiar environment.",
                "The bot allows you to generate responses onto any text channels allowing collaborative usage of chatGPT.",
                "The bot is also able to access GPT 4 without paying $20 per month.",
                "With DALL-E integration, brainstorming with friends has never been easier."
            ],
            tags: ["Python", "AI", "API", "All"]
        },
        {
            "title": "JobStreet Webscraper",
            "date": "January 2022",
            "url": "https://www.github.com/mr2wei",
            "description": [
                "During the Pandemic, I set out on a project to collect data from a popular job searching website in my country, JobStreet. The goal was to get insights on what the market is expecting, average pays advertsied and number of job openings."
            ],
            tags: ["Python", "All"]
        },
        {
            "title": "Reddit Webscraper",
            "date": "Sometime during the Covid-19 lockdown",
            "url": "https://www.github.com/mr2wei",
            "description": [
                "During the Animal Crossing Hype, I made a scraper to give me alerts when someone's island is selling turnips for cheap or buying them for high prices. This was my first introduction to BS4 and webscraping"
            ],
            tags: ["Python", "All"]
        },
        {
            "title": "Constituency Welfare Assistance Heatmap",
            "date": "December 2021",
            "url": "https://www.github.com/mr2wei",
            "description": [
                "Developed a heatmap during my internship with the Parliament of Subang to visualize areas with high volumes of welfare assistance requests.",
                "Heatmap along with data gathered allowed more efficient allocation of public funds within the constituency",
                "Data processed and analysed using Python, Pandas, and more."
            ],
            tags: ["Python", "All"]
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
                            <button onClick={() => setFilter(filterOption)} className={filter === filterOption ? "active" : ""} key={index}>{filterOption}</button>
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
                            <div className="item-tags">
                                <ul className="tag-list">
                                    {project.tags.map((tag, i) => (
                                        <li key={i} className={`tag ${tag}-tag`}>#{tag}</li>
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