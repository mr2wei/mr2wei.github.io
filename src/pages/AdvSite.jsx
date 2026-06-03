import React, { useState } from "react";
import Dock from "../components/Advanced/Dock";
import '../styles/AdvSite.css';
import textIcon from '../assets/icons/text-x-generic.svg';
import documentIcon from '../assets/icons/x-office-document.svg';
import selfPortraitIcon from '../assets/icons/self-portrait-icon.png';
import folderIcon from '../assets/icons/inode-directory.svg';
import todoList from '../assets/files/todo.txt';
import resume from '../assets/resume/Wei resume.pdf';
import selfPortrait from '../assets/images/selfImage.png';
import Window from "../components/Advanced/Window";
import { Rnd } from 'react-rnd';

function AdvSite() {
    const [items] = useState([
        { id: 0, x: 10, y: 10, icon: textIcon, label: 'todo list.txt', file: todoList, type: 'text' },
        { id: 1, x: 10, y: 160, icon: documentIcon, label: 'Wei Resume.pdf', file: resume, type: 'pdf' },
        { id: 2, x: 10, y: 310, icon: selfPortraitIcon, label: 'Self Portrait.png', file: selfPortrait, type: 'image' },
        { id: 3, x: 10, y: 460, icon: folderIcon, label: 'assets', type: 'finder', defaultWidth: 740, defaultHeight: 480, minWidth: '600px', minHeight: '350px' },
    ]);

    const [openWindows, setOpenWindows] = useState(new Set([items[0]]));
    const [selectedItem, setSelectedItem] = useState(null);
    const [windowStack, setWindowStack] = useState([items[0].id]);

    const activateWindow = (id) => {
        setWindowStack(prev => {
            if (prev[prev.length - 1] === id) return prev;
            return [...prev.filter(i => i !== id), id];
        });
    };

    const activeWindowId = windowStack[windowStack.length - 1] ?? null;

    const onWindowClose = (item) => {
        setOpenWindows((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item);
            return newSet;
        });
        setWindowStack(prev => prev.filter(i => i !== item.id));
    };

    const handleOpenFile = (file) => {
        setOpenWindows((prev) => new Set(prev).add(file));
        setWindowStack(prev => [...prev.filter(i => i !== file.id), file.id]);
    };

    return (
        <div
            className="AdvSite"
            onClick={() => setSelectedItem(null)}
        >
            {items.map((item) => (
                <Rnd
                    key={item.id}
                    size={{ width: 'auto', height: 'auto' }}
                    default = {{
                        x: item.x,
                        y: item.y,
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item.id);
                    }}
                    onDoubleClick={() => {
                        setOpenWindows((prev) => new Set(prev).add(item));
                        activateWindow(item.id);
                    }}
                    className={`item ${selectedItem === item.id ? 'selected' : ''}`}
                    enableResizing={false}
                >
                    <div className="item-container">
                        <img
                            src={item.icon}
                            alt=""
                            className="item-icon"
                            draggable="false"
                        />
                        <span className="item-label" draggable="false">{item.label}</span>
                    </div>
                </Rnd>
            ))}
            {
                Array.from(openWindows).map((item) => (
                    <Window
                        key={item.id}
                        item={item}
                        onClose={onWindowClose}
                        isActive={activeWindowId === item.id}
                        zIndex={2 + windowStack.indexOf(item.id)}
                        onActivate={() => activateWindow(item.id)}
                        onOpenFile={handleOpenFile}
                    />
                ))
            }
            <Dock openWindows={openWindows} activeWindowId={activeWindowId} onActivate={activateWindow} />
        </div>
    );
}

export default AdvSite;
