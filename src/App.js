import logo from "./logo.svg";
import "./App.css";
import "./my-style.css";
import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";

function App() {
  const myStyle = {
    color: "lightblue",
    backgroundColor: "red",
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Header2 />
        <Header3 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 style={{ color: "lightblue" }}>Hello Blue Header!</h1>
        <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>
        <div style={myStyle}>Hello Style!</div>
        <div className="my-style">Hello Style from external CSS!</div>
        <div className={myStyleModule["my-style"]}>
          Hello Style from CSS modules!
        </div>
      </header>
    </div>
  );
}

export default App;
