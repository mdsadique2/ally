import React, { useState, useEffect } from 'react';
import appStrings from 'Utilities/StringConst'
import './style.css';
import './mobile-style.css';

const Aside = (props) => {
    const {modalClosedMethod, isModalOpen} = props;
    const [isOpen, setIsOpen] = useState(props.isModalOpen);
    

    useEffect(() => {
        setIsOpen(props.isModalOpen);
    }, [props.isModalOpen]) 

    
    const closeButtonClicked = () => {
        modalClosedMethod();
    };


    return (
        <section>
            <div className={"modal-overlay "+ (isOpen ? "show-overlay" : "")}>
                <div className="modal">
                    <div className="modal-header">
                        <button className="close-button" onClick={closeButtonClicked}>
                            {appStrings.closeLabel}
                        </button>
                    </div>
                    
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aside;