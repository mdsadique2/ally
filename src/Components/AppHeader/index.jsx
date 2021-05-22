import React from 'react';
import appStrings from 'Utilities/StringConst';
import './style.css';

const AppHeader = () => {
    return (
        <header className="app-header-container">
            <div className="app-header">
                <div className="page-title">
                    {appStrings.appName}
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
