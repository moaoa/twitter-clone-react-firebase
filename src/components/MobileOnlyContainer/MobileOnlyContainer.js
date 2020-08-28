import React from 'react';
import './MobileOnlyContainer.css';

function MobileOnlyContainer(props) {
    return <div className={'MobileOnlyContainer'}>{props.children}</div>;
}

export default MobileOnlyContainer;
