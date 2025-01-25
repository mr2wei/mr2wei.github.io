import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/PhotoModal.css';

const PhotoModal = ({ show, handleClose, imageUrl, imageTitle, imageDescription }) => {
    const [showModal, setShowModal] = useState(show);
    
    useEffect(() => {
        setShowModal(show);
    }, [show]);

    return (
        <div className={`modal-overlay ${showModal ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={handleClose}>&times;</button>
                <img src={imageUrl} alt={imageTitle} className="modal-image" />
                <div className="modal-description">
                    <h2>{imageTitle}</h2>
                    <p>{imageDescription}</p>
                </div>

            </div>
        </div>
    );
};

PhotoModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired,
};

export default PhotoModal;
