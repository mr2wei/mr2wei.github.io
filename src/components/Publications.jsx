import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "../styles/Publications.css";

export default function Publications({ showBackground }) {
    const publications = [
        {
            text: 'Tung, Y.-S., Kumar, G., Jiang, W., Hayes, B., & Roncone, A. "CRED: Counterfactual Reasoning and Environment Design for Active Preference Learning," under review for ICRA 2026, 2025',
        },
        {
            text: 'Tung, Y.-S., Gupta, H., Jiang, W., Hayes, B., & Roncone, A. "Causal Influence Detection for Human Robot Interaction," workshop on Causal Inference for Human-Robot Interaction (Causal-HRI), 2024',
            url: "https://www.cairo-lab.com/papers/causalhri2024_workshop.pdf",
        },
    ];

    return (
        <div id="publications" className="section-container">
            <div className={`background ${showBackground ? "" : "bg-hidden"}`}></div>
            <div className="container">
                <div className="title">
                    <h1>Publications</h1>
                </div>
                <div className={`text-content-container ${showBackground ? "" : "simple"}`}>
                    <div className="item-description">
                        <ul>
                            {publications.map((pub, i) => (
                                <li className="publication-item" key={i}>
                                    {pub.url ? (
                                        <a href={pub.url} target="_blank" rel="noreferrer">
                                            {pub.text}
                                            <FaExternalLinkSquareAlt className="external-link-icon" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        pub.text
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="image-credit">Photo of a temple in Da Nang by Me.</div>
            </div>
        </div>
    );
}


