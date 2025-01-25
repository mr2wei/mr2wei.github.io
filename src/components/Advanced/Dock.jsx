import React from "react";

function Dock({ openWindows, activeWindow, setActiveWindow }) {
    return (
        <div className="dock">
            {Array.from(openWindows).map((item) => (
                <div
                    key={item.id}
                    className={`dock-item ${activeWindow === item.id ? 'active' : ''}`}
                    onClick={() => setActiveWindow(item.id)}
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