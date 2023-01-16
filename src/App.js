import logo from "./logo.svg";
import "./App.css";
import styles from "./my-style.module.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";

const App = () => {
  const element1 = <div>Hello</div>;
  const element2 = (
    <div>
      <h1>Hello</h1>
      <h2>World!</h2>
    </div>
  );
  const fullName = "Dominic Torretto";
  const element3 = <div>{fullName}</div>;
  const element4 = <div>{1 + 1}</div>;
  const user = {
    firstName: "Dominic",
    lastName: "Torretto",
  };
  const element5 = (
    <div>
      {user.firstName} {user.lastName}
    </div>
  );
  const displayName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  const element6 = <div>{displayName(user)}</div>;
  const oddOrEven = (number) => {
    return number % 2 !== 0 ? "odd" : "even";
  };
  const element7 = <div>Number 7 is {oddOrEven(7)}</div>;
  const element8 = <div class="myStyle">Hello Style!</div>;
  const myStyle = {
    color: "blue",
    backgroundColor: "red",
    display: "inline-block",
    padding: "0.5rem",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>
          <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>
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
      <div className="workshop-react-body">
        <h1 className='workshop-header'><u>Workshop JSX</u></h1>
        <p className="question">Question: 1</p>
        <p>{element1}</p>
        <p className="question">Question: 2</p>
        <p>{element2}</p>
        <p className="question">Question: 3</p>
        <p>{element3}</p>
        <p className="question">Question: 4</p>
        <p>{element4}</p>
        <p className="question">Question: 5</p>
        <p>{element5}</p>
        <p className="question">Question: 6</p>
        <p>{element6}</p>
        <p className="question">Question: 7</p>
        <p>{element7}</p>
      </div>
      <div className="workshop-react-body">
        <h1 className={styles['workshop-header']}><u>Workshop CSS</u></h1>
        <p className="question">Question: 1</p>
        <h1 style={{ color: "skyBlue" }}>Hello Blue Header!</h1>
        <p className="question">Question: 2</p>
        <h1
          style={{
            backgroundColor: "salmon",
            display: "inline-block",
            padding: "0.5rem",
          }}
        >
          Hello Red Background !
        </h1>
        <p className="question">Question: 3</p>
        <h1 style={myStyle}>Hello Style!</h1>
        <p className="question">Question: 4</p>
        <h1 className="myStyle">Hello Style!</h1>
      </div>
      <div>
        {Header()} {Header2()} {Header3()}
      </div>
    </div>
  );
};

export default App;
