import React, { useState, useEffect } from 'react';
import folderIcon from '../../assets/icons/inode-directory.svg';
import folderPicturesIcon from '../../assets/icons/folder-pictures.svg';
import folderDocumentsIcon from '../../assets/icons/folder-documents.svg';
import textIcon from '../../assets/icons/text-x-generic.svg';
import documentIcon from '../../assets/icons/x-office-document.svg';

import todoFile from '../../assets/files/todo.txt';
import resumeFile from '../../assets/resume/Wei resume.pdf';

import img0060 from '../../assets/images/IMG_0060.jpeg';
import orion from '../../assets/images/orion.jpeg';
import boulderValleyRanch from '../../assets/images/bouldervalleyranch.jpeg';
import landscape from '../../assets/images/20240117_172940.jpg';
import monkeyEatingFlower from '../../assets/images/monkeyEatingFlower.jpeg';
import eagle from '../../assets/images/eagle.jpeg';
import georgetown from '../../assets/images/georgetown.jpeg';
import monkeysCuddling from '../../assets/images/monkeyscuddling.jpeg';
import mutiara from '../../assets/images/mutiara.jpeg';
import hornbill from '../../assets/images/hornbill.jpeg';
import swallow from '../../assets/images/swallow.jpeg';
import selfImage from '../../assets/images/selfImage.png';

const FOLDERS = [
    { id: 'files', label: 'files', icon: folderIcon },
    { id: 'images', label: 'images', icon: folderPicturesIcon },
    { id: 'resume', label: 'resume', icon: folderDocumentsIcon },
];

const FILES = {
    files: [
        { id: 'finder-todo', name: 'todo.txt', kind: 'Plain Text', icon: textIcon, type: 'text', label: 'todo list.txt', file: todoFile },
    ],
    images: [
        { id: 'finder-img0060', name: 'IMG_0060.jpeg', kind: 'JPEG Image', icon: img0060, type: 'image', label: 'IMG_0060.jpeg', file: img0060 },
        { id: 'finder-orion', name: 'orion.jpeg', kind: 'JPEG Image', icon: orion, type: 'image', label: 'orion.jpeg', file: orion },
        { id: 'finder-boulder', name: 'bouldervalleyranch.jpeg', kind: 'JPEG Image', icon: boulderValleyRanch, type: 'image', label: 'bouldervalleyranch.jpeg', file: boulderValleyRanch },
        { id: 'finder-landscape', name: '20240117_172940.jpg', kind: 'JPEG Image', icon: landscape, type: 'image', label: '20240117_172940.jpg', file: landscape },
        { id: 'finder-monkey-flower', name: 'monkeyEatingFlower.jpeg', kind: 'JPEG Image', icon: monkeyEatingFlower, type: 'image', label: 'monkeyEatingFlower.jpeg', file: monkeyEatingFlower },
        { id: 'finder-eagle', name: 'eagle.jpeg', kind: 'JPEG Image', icon: eagle, type: 'image', label: 'eagle.jpeg', file: eagle },
        { id: 'finder-georgetown', name: 'georgetown.jpeg', kind: 'JPEG Image', icon: georgetown, type: 'image', label: 'georgetown.jpeg', file: georgetown },
        { id: 'finder-monkeys-cuddling', name: 'monkeyscuddling.jpeg', kind: 'JPEG Image', icon: monkeysCuddling, type: 'image', label: 'monkeyscuddling.jpeg', file: monkeysCuddling },
        { id: 'finder-mutiara', name: 'mutiara.jpeg', kind: 'JPEG Image', icon: mutiara, type: 'image', label: 'mutiara.jpeg', file: mutiara },
        { id: 'finder-hornbill', name: 'hornbill.jpeg', kind: 'JPEG Image', icon: hornbill, type: 'image', label: 'hornbill.jpeg', file: hornbill },
        { id: 'finder-swallow', name: 'swallow.jpeg', kind: 'JPEG Image', icon: swallow, type: 'image', label: 'swallow.jpeg', file: swallow },
        { id: 'finder-self', name: 'selfImage.png', kind: 'PNG Image', icon: selfImage, type: 'image', label: 'selfImage.png', file: selfImage },
    ],
    resume: [
        { id: 'finder-resume', name: 'Wei resume.pdf', kind: 'PDF Document', icon: documentIcon, type: 'pdf', label: 'Wei resume.pdf', file: resumeFile },
    ],
};

function FinderContent({ onOpenFile }) {
    const [selectedFolder, setSelectedFolder] = useState('files');
    const [selectedFile, setSelectedFile] = useState(null);
    const [textPreview, setTextPreview] = useState('');

    useEffect(() => {
        setSelectedFile(null);
    }, [selectedFolder]);

    useEffect(() => {
        if (selectedFile && selectedFile.type === 'text') {
            fetch(selectedFile.file)
                .then(res => res.text())
                .then(text => setTextPreview(text.slice(0, 400)))
                .catch(() => setTextPreview(''));
        } else {
            setTextPreview('');
        }
    }, [selectedFile]);

    const currentFiles = FILES[selectedFolder] || [];

    return (
        <div className="finder-layout">
            <div className="finder-sidebar">
                <div className="finder-sidebar-section-label">Locations</div>
                {FOLDERS.map(folder => (
                    <div
                        key={folder.id}
                        className={`finder-sidebar-item ${selectedFolder === folder.id ? 'active' : ''}`}
                        onClick={() => setSelectedFolder(folder.id)}
                    >
                        <img src={folder.icon} alt="" className="finder-sidebar-icon" draggable="false" />
                        <span>{folder.label}</span>
                    </div>
                ))}
            </div>

            <div className="finder-file-area">
                <div className="finder-file-header">
                    <span className="finder-file-header-name">Name</span>
                    <span className="finder-file-header-kind">Kind</span>
                </div>
                <div className="finder-file-list" onClick={() => setSelectedFile(null)}>
                    {currentFiles.map(file => (
                        <div
                            key={file.id}
                            className={`finder-file-row ${selectedFile?.id === file.id ? 'selected' : ''}`}
                            onClick={(e) => { e.stopPropagation(); setSelectedFile(file); }}
                            onDoubleClick={(e) => { e.stopPropagation(); onOpenFile && onOpenFile(file); }}
                        >
                            <img src={file.icon} alt="" className="finder-file-row-icon" draggable="false" />
                            <span className="finder-file-row-name">{file.name}</span>
                            <span className="finder-file-row-kind">{file.kind}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="finder-details">
                {!selectedFile ? (
                    <span className="finder-details-empty">{currentFiles.length} item{currentFiles.length !== 1 ? 's' : ''}</span>
                ) : (
                    <>
                        <div className="finder-details-preview">
                            {selectedFile.type === 'image' ? (
                                <img src={selectedFile.file} alt={selectedFile.name} />
                            ) : (
                                <img src={selectedFile.icon} alt="" className="finder-details-icon" />
                            )}
                        </div>
                        <div className="finder-details-name">{selectedFile.name}</div>
                        <div className="finder-details-kind">{selectedFile.kind}</div>
                        {selectedFile.type === 'text' && textPreview && (
                            <div className="finder-details-text-preview">{textPreview}</div>
                        )}
                        <button
                            className="finder-details-open-btn"
                            onClick={(e) => { e.stopPropagation(); onOpenFile && onOpenFile(selectedFile); }}
                        >
                            Open
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default FinderContent;
