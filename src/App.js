import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";
import "./my-style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Header />
          <Header2 />
          <Header3 />
        </a>
        <div className="test-font-kanit">Hello test FONT!</div>
      </header>
    </div>
  );
}

export default App;

// Quiz 1
//<h1 style={{ color: "blue" }}>Hello Blue Header!</h1>

// Quiz 2
// <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>

// Quiz 3
//const myStyle = {
//   color: "aqua",
//   backgroundColor: "red",
// };
// <div style={myStyle}>Hello Style!</div>

// Quiz 4
// in file my-style.css
// .style1 {
//   color: aqua;
//   background-color: red;
// };

//in file App.js
// <div className="style1">Hello Style!</div>

// Quiz 5
// in App.css file
// @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
// .test-font-kanit {
//   font-family: 'Kanit', sans-serif;
//   font-size: 24px;
// }

// in App.js file
// <div className="test-font-kanit">Hello test FONT!</div>
