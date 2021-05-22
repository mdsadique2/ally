import React from 'react';
import './style.css';

const KeyValue = (props) => {
    let {keyToDisplay, value} = props;
    return (
        <React.Fragment>
            <div className="attributes">
                <div className="key">{keyToDisplay} :</div>
                <div className="value">{value}</div>
            </div>
        </React.Fragment>
    );
}

export default KeyValue;