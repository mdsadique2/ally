import React, { useState } from 'react';
import appStrings from 'Utilities/StringConst';

import './style.css';

const SelectDropdown = (props) => {
    let {onChangeMethod, optionsList} = props;
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (event) => {
        let index = event.target.value;
        let text = optionsList[index];
        onChangeMethod({
            index,
            text
        })
        setSelectedValue(text);
        console.log(selectedValue);
    };

    return (
        <div className="select-container">
            <select onChange={handleChange}>
                {
                    (optionsList || []).map((elm, index) => {
                        return (
                            <option 
                                key={'option-key-'+index}
                                value={index}
                            >
                                {elm}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default SelectDropdown;