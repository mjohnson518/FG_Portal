import React from 'react';
import logo from './filecoin-fil-logo.webp';
import './portal.css';
import * as React from 'react';
import ReactDOM from 'react-dom/client';

const portal = ReactDOM.createPortal(document.getElementById('portal'));
portal.render(<h1>Hello, world!</h1>);
  

/* <React.StrictMode>
    <Portal/>
  </React.StrictMode>
);  
    
function Portal() {
  return (
    <div className="Portal">
      <header className="Portal-header">
        <img src={logo} className="Portal-logo" alt="logo" /> 
        <p>
          Welcome to the Reporting Portal!
        </p>
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

export default Portal; */