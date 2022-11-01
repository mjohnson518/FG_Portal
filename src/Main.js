import React from 'react';
import logo from './favicon.ico';
import './App.css';

function Main() {
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
            <div>
                <p>Welcome to the Filecoin Green Storage Providers Reporting Portal!</p>
            </div>
            <div>
                <a href="/About"><button variant="contained" className="Button" type="button"><b>ENTER</b></button></a>
            </div>
        </header>
    </div>
);
}

export default Main;
