import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import PDFViewer from "./PDFViewer";


function Window({ item, onClose, activeWindow, setActiveWindow }) {
    const [textFileContent, setTextFileContent] = React.useState("");
    const [size, setSize] = useState({ width: 600, height: 500 });
    const [position, setPosition] = useState({ x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 650) / 2 });
    const [isMaximized, setIsMaximized] = useState(false);
    const [previousSize, setPreviousSize] = useState({ width: 600, height: 650 });
    const [previousPosition, setPreviousPosition] = useState({ x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 650) / 2 });
    const [isExpanding, setIsExpanding] = useState(false);
    useEffect(() => {
        if (item.type === 'text') {
            fetch(item.file)
                .then(response => response.text())
                .then(text => setTextFileContent(text))
                .catch(error => console.error('Error loading the file:', error));
        }
    }, [item]);
    
    return (
        <Rnd
            size={{ width: size.width, height: size.height }}
            position={position}
            onDrag={() => {
                setActiveWindow(item.id);
            }}
            onResize={() => {
                setActiveWindow(item.id);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setSize({
                    width: ref.style.width,
                    height: ref.style.height,
                });

                // update position
                setPosition(position);

                if (isMaximized) {
                    setIsMaximized(false);
                }
            }}
            onDragStop={(e, d) => {
                setPosition({ x: d.x, y: d.y });
            }}
            default={{
                x: (window.innerWidth - 600) / 2,
                y: (window.innerHeight - 650) / 2,
                width: 600,
            }}
            minWidth= "300px"
            minHeight= "300px"
            bounds="parent"
            dragHandleClassName="drag-handle"
            style={{zIndex: 2}}
            className={`${isExpanding ? 'expanding' : ''} ${activeWindow === item.id ? 'active-window' : ''}`}
            onClick={() => setActiveWindow(item.id)}
        >
            <div className={`window-container ${activeWindow === item.id ? 'active-window-container' : ''}`}>
                <div className="window-header drag-handle">
                    {item.label}
                    <div className = "window-action-buttons" >
                        <button className="window-expand-button" onClick={() => {
                            if (isMaximized) {
                                setSize(previousSize);
                                setPosition(previousPosition);
                            } else {
                                setPreviousSize(size);
                                setPreviousPosition(position);
                                setSize({ width: window.innerWidth, height: window.innerHeight - 125 });
                                setPosition({ x: 0, y: 0 });
                            }
                            setIsMaximized(!isMaximized);
                            setIsExpanding(true);
                            setTimeout(() => setIsExpanding(false), 300);
                        }}>
                            &oplus;
                        </button>
                        <button className="window-close-button" onClick={() => onClose(item)}>
                            &otimes;
                        </button>
                    </div>
                </div>
                <div className="window-content">
                    {
                        item.type === 'text' && 
                        (
                            <textarea value={textFileContent} onChange={(e) => setTextFileContent(e.target.value)} className="txt-file" />
                        )
                    }
                    {
                        item.type === 'pdf' && 
                        (
                            <PDFViewer file={item.file} />
                        )
                    }
                    {
                        item.type === 'image' && 
                        (
                            <img 
                                src={item.file} 
                                alt={item.label} 
                                className="image-file" 
                                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                            />
                        )
                    }
                </div>
            </div>
        </Rnd>
    );
}

export default Window;
