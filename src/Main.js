import React from 'react';
import logo from './FG_Outline.ico';
import './App.css';

function Main() {
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
            <div>
                <p><b>Welcome to the Filecoin Green Reporting Portal!</b></p>
            </div>
            <div>
                <p><small>
                    SP looking for RECs? Submit info here: <a className="App-link" href="https://airtable.com/shrdeCcNtIGAeMZMz" target="_blank" rel="noopener noreferrer"><b>SP REC Request Form</b></a>.
                </small></p>
            </div>
        </header>
    </div>
);
}

export default Main;
