import React, { useState } from 'react';
import appStrings from 'Utilities/StringConst'
import './style.css';
import './mobile-style.css';

const ResultAccordion = (props) => {
    let {renderData, clickedChildrenMethod} = props;
    let {children} = renderData;
    const [isOpen, setIsOpen] = useState('true');

    const toggleAccordion = (event) => {
        setIsOpen(!isOpen);
    };

    const childrenClicked = (index) => {
        clickedChildrenMethod({
            children: children[index],
            parent: renderData
        });
    };

    const getChildren = () => {
        if (children && children.length > 0) {
            return <React.Fragment>
                {
                    children.map((elm, index) => {
                        return (
                            <div key={`${renderData.id}-${elm.id}-index`}
                                className="children"
                                onClick={()=>{
                                    childrenClicked(index);
                                }}
                            >
                                {elm.title}
                            </div>
                        )
                    })
                }
            </React.Fragment>
        }

        return (
            <div className="no-children">
                {appStrings.noChildrenMessage}
            </div>
        )
    }

    
    return (
        <div className={"accordion-container " + (isOpen ? "" : "accordion-close")}>
            <div className ="accordion-header" onClick={toggleAccordion}>
                <div className="chev">
                    &#8250;
                </div>
                <div className="title">
                    {renderData.title}
                </div>
                <div className="badge">
                    {renderData.category}
                </div>
            </div>

            <div className ="accordion-body">
                { getChildren()}
            </div>
        </div>
    );
}

export default ResultAccordion;