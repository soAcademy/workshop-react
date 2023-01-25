import logo from "./logo.svg";
import Header from "./Header";
import "./my-style.css";
import "./App.css";

function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "red",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>

        <h1 style={{ backgroundColor: "red" }}>Hello Red Background</h1>

        <div style={myStyle}>Hello Style!</div>

        <div className="my-style">Hello Style!</div>
      </header>
    </div>
  );
}

export default App;
