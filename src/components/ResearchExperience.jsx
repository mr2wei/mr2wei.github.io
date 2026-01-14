import React from "react";
import "../styles/ResearchExperience.css";

export default function ResearchExperience({ showBackground }) {
    const researchExperiences = [
        {
            company: "Autonomous Robotics and Perception Group (ARPG)",
            title: "Research Assistant",
            date: "June 2025 - August 2025",
            description: [
                "Built a visual memory pipeline that reduced the number of frames retained by up to 95% while preserving narrative continuity and informational content across long videos, lowering storage requirements.",
                "Utilized custom classification models and VLM captioning to filter and store visual-textual memories.",
                "Designed a multi-vector long-term memory with semantic, temporal-window, and spatial-proximity queries for location/object finding."
            ],
            keywords: ["Vision Language Models", "VLM", "classification", "semantic", "temporal", "spatial"],
            tags: ["AI", "Python", "Robotics"]
        },
        {
            company: "Collaborative AI and Robotics Lab (CAIRO), Human Interaction & Robotics Group (HIRO)",
            title: "Research Assistant",
            date: "October 2023 – Current",
            description: [
                "Implemented FairMOT on SCAND to generate pedestrian tracking data and robot-relative positions, providing early insights that shaped causal influence detection research resulting in workshop paper.",
                "Built an RGBD grasping pipeline for realsense cameras with YOLO models, FastSAM and GraspNet for quick and accurate object segmentation and ranked grasp proposals for shared-autonomy research.",
                "Built MuJoCo and Webots simulation environments, conducted 25-participant user study, and analyzed results showing 97% (manipulation) and 78% (navigation) reward accuracy for CRED system.",
                "Research led to co-authored publications: workshop paper on causal influence detection (Causal-HRI 2024), paper on active preference learning (in submission), and shared autonomy paper (in progress)"
            ],
            keywords: ["FairMOT", "RGBD", "YOLO", "FastSAM", "GraspNet", "MuJoCo", "Webots", "CRED"],
            tags: ["AI", "Python", "Robotics"]
        },
    ];

    const boldKeywords = (text, keywords) => {
        if (!keywords || keywords.length === 0) return text;

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

    return (
        <div id="research" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            <div className="container">
                <div className="title">
                    <h1>Research Experience</h1>
                </div>
                {researchExperiences.map((exp, index) => (
                    <div key={`research-${index}`} className={`text-content-container experience-item ${showBackground ? '' : 'simple'}`}>
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

                <div className="image-credit">
                    Photo of lanterns in Da Nang by Me.
                </div>
            </div>
        </div>
    );
}


