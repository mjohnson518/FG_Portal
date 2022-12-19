import React from 'react';
import logo from './FG_Outline.ico';
import './App.css';

function Main() {
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
            <div  className='Content'>
                <p><b>Welcome to the <span className='highlight-green'>Filecoin Green</span> Reporting Portal!</b></p>
            </div>
            <div className='Content'>
                <p><small>
                    SP looking for RECs? Submit info here: <br></br><a className="App-link" href="https://airtable.com/shrdeCcNtIGAeMZMz" target="_blank" rel="noopener noreferrer"><b>SP REC Request Form</b></a>
                </small></p>
            </div>
        </header>
    </div>
);
}

export default Main;
