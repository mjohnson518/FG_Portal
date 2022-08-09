import logo from './filecoin-fil-logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Welcome to the Filecoin Green Storage Providers Reporting Portal!
        </p>
        <p>
          Learn more about the <a
          className="App-link"
          href="https://green.filecoin.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Green Guidance! 
        </a>
        </p>
        <p>
        Learn more about <a
          className="App-link"
          href="https://green.filecoin.io"
          target="_blank"
          rel="noopener noreferrer"
        >
        Filecoin Green!
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
