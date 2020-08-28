import React from 'react';
import './SidebarOption.css';

function SideOption({ text, Icon, active, clicked }) {
    return (
        <div
            onClick={clicked}
            className={`SidebarOption ${active ? ' Active' : ''}`}
        >
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SideOption;
