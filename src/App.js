import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Header2} from "./Header 2";

function App() {
  // const myStyle = {
  //     color: "blue",
  //     backgroundColor: "red"
  //   }
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
          {Header}
          {Header2}
        </p>
        <h1 style={{ color: "blue" }}>Hello Blue Header</h1>
        <h1 style={{ backgroundColor: "red" }}>Hello Red Background</h1>
        <div className="myStyle">Hello Style!</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
