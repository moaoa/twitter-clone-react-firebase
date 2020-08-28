import React, { useContext } from 'react';
import './SidebarOption.css';
import { GlobalContext } from '../../../App';

function SideOption({ text, Icon, clicked }) {
    const { toggleModal } = useContext(GlobalContext);
    return (
        <div className={`SidebarOption`} onClick={clicked}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SideOption;
