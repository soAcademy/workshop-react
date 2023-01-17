import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { Header2, Header3 } from "./header2";
import "./App-0.css";
import pic1 from "./squirrel.jpg";

const App = () => {
  const myStyle = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: "50px",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{
            color: "yellow",
            fontSize: "15px",
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{ color: "blue" }}>1.Hello Blue Header!</h1>
        <h1 style={{ backgroundColor: "red" }}>2.Hello Red Background!</h1>
        <h1 style={myStyle}>3.Create Const myStyle</h1>
        <br />
        <div className="green-yellow-50px">4.Import myStyle from css file</div>
        <br />
        <div className="try-font">5.Import font family from google Font</div>
        <br />
        <img
          style={{ width: "500px" }}
          src="https://cdn.pixabay.com/photo/2023/01/10/16/23/hedgehog-7710053__340.jpg"
          alt=""
        />
        <img style={{ width: "500px" }} src="./gorilla.jpg" />
        <img style={{ width: "500px" }} src={pic1} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Header />
          <Header2 />
          <Header3 />
        </a>
      </header>
    </div>
  );
};

export default App;
