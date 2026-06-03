import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import PDFViewer from "./PDFViewer";
import FinderContent from "./FinderContent";


function Window({ item, onClose, isActive, zIndex, onActivate, onOpenFile }) {
    const defaultWidth = item.defaultWidth || 600;
    const defaultHeight = item.defaultHeight || 500;
    const [textFileContent, setTextFileContent] = React.useState("");
    const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
    const [position, setPosition] = useState({ x: (window.innerWidth - defaultWidth) / 2, y: (window.innerHeight - defaultHeight - 125) / 2 });
    const [isMaximized, setIsMaximized] = useState(false);
    const [previousSize, setPreviousSize] = useState({ width: defaultWidth, height: defaultHeight });
    const [previousPosition, setPreviousPosition] = useState({ x: (window.innerWidth - defaultWidth) / 2, y: (window.innerHeight - defaultHeight - 125) / 2 });
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
            onDragStart={() => {
                onActivate();
            }}
            onResizeStart={() => {
                onActivate();
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
            minWidth={item.minWidth || "300px"}
            minHeight={item.minHeight || "300px"}
            bounds="parent"
            dragHandleClassName="drag-handle"
            style={{zIndex: zIndex}}
            className={`${isExpanding ? 'expanding' : ''} ${isActive ? 'active-window' : ''}`}
            onClick={() => onActivate()}
        >
            <div className={`window-container ${isActive ? 'active-window-container' : ''}`}>
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
                    {
                        item.type === 'finder' &&
                        (
                            <FinderContent onOpenFile={onOpenFile} />
                        )
                    }
                </div>
            </div>
        </Rnd>
    );
}

export default Window;
