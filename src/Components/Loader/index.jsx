import React from 'react';
import './style.css';

const Loader = (props) => {
    let {loadingText} = props;
    return (
        <div className="loader-container">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div className="loader-text">{loadingText}</div>
        </div>
    );
}

export default Loader;