// import logo from "./logo.svg";
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
  const customers = [
    {
      name: "Bin",
      orderValue: 1400,
    },
    {
      name: "Jam",
      orderValue: 1500,
    },
    {
      name: "Ploy",
      orderValue: 2000,
    },
  ];
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
        <table className={myStyleModule["table-style"]}>
          <thead className={myStyleModule["table-head-style"]}>
            <th>Name</th>
            <th>Order Value</th>
          </thead>
          {customers.map((customer, index) => (
            <tr
              className={
                index % 2 === 0
                  ? myStyleModule["table-row-style-odd"]
                  : myStyleModule["table-row-style-even"]
              }
            >
              <td>{customer.name}</td>
              <td>{customer.orderValue}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
