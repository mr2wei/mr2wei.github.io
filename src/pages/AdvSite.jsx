import React, { useState } from "react";
import Dock from "../components/Advanced/Dock";
import '../styles/AdvSite.css';
import textIcon from '../assets/icons/text-x-generic.svg';
import documentIcon from '../assets/icons/x-office-document.svg';
import selfPortraitIcon from '../assets/icons/self-portrait-icon.png';
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
    ]);

    const [openWindows, setOpenWindows] = useState(new Set([items[0]]));
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeWindow, setActiveWindow] = useState(null);

    const onWindowClose = (item) => {
        setOpenWindows((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item);
            return newSet;
        });
    };

    return (
        <div
            className="RTOS"
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
                        setActiveWindow(item.id);
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
                    <Window key={item.id} item={item} onClose={onWindowClose} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
                ))
            }
            <Dock openWindows={openWindows} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
        </div>
    );
}

export default AdvSite;
