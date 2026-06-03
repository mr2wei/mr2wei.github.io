import React from "react";

function Dock({ openWindows, activeWindowId, onActivate }) {
    return (
        <div className="dock">
            {Array.from(openWindows).map((item) => (
                <div
                    key={item.id}
                    className={`dock-item ${activeWindowId === item.id ? 'active' : ''}`}
                    onClick={() => onActivate(item.id)}
                >
                    <img
                        src={item.icon}
                        alt=""
                        className="dock-icon"
                        draggable="false"
                    />
                </div>
            ))}
        </div>
    );
}

export default Dock;