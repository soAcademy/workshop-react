import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 style= {{color: "blue"}}>Hello Blue Header!</h1>
        <h1 style= {{backgroundColor: "red"}}>Hello Red Background!</h1>
        </p>
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        &nbsp;&nbsp;
        <a
          className="App-link"
          href="https://chat.openai.com/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask ChatGPT
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
