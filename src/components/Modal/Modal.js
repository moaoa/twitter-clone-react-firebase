import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

function Modal(props) {
    const overlayStyles = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'black',
        transition: 'all 0.2s ease',
        visibility: props.isOpen ? 'visible' : 'hidden',
        opacity: 0.6,
        zIndex: 100,
    };
    return ReactDom.createPortal(
        <>
            <div onClick={props.clicked} style={overlayStyles}></div>
            <div
                className={`modal ${props.isOpen ? 'openModal' : 'closeModal'}`}
            >
                {props.children}
            </div>
        </>,
        document.querySelector('.portal')
    );
}

export default Modal;
