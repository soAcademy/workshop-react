import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>"Hello React!"</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header />
        <Header2 />
        <Header3 />
      </header>
    </div>
  );
}

export default App;
