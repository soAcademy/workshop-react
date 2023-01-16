import logo from "./logo.svg";
import "./App.css";
// import Header from './Header';
// import {Header1, Header2} from './Header2';
import "./my-style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>
        <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>
        <div className="colBlueBackRed">Hello Style!</div>
      </header>
    </div>
  );
}

export default App;
