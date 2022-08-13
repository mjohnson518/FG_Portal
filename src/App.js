import logo from './filecoin-fil-logo.webp';
import './App.css';
import * as React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Welcome to the Filecoin Green Storage Providers Reporting Portal!
        </p>
        <br></br>
        <div>
          <button variant="contained" className="Button" type="button"><b>ENTER</b></button>
        </div>
        <br></br>
        <p>
        Learn more about <a
          className="App-link"
          href="https://green.filecoin.io"
          target="_blank"
          rel="noopener noreferrer"
        ><b>
        Filecoin Green
        </b></a>.
        </p>
      </header>
    </div>
  );
  
}

export default App;
