import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";

const App = () => {
  const number = 3;
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
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{
            color: "#ff8900",
            fontSize: "50px",
            backgroundColor: "green",
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="test-style">Test Style</div>
        <div
          className={number % 2 === 0 ? "test-style-red" : "test-style-green"}
        >
          Test Style
        </div>
        <Header />
        <Header2 />
        <Header3 />
        <div className="test-font-kanit">ทดสอบ Font Kanit</div>
        <div style={{fontFamily: "Kanit"}}>ทดสอบ Font Kanit 2</div>
        <table style={{ backgroundColor: "gray" }}>
          <thead>
            <th>ชื่อ</th>
            <th>มูลค่าคำสั่งซื้อ</th>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr
                className={
                  idx % 2 === 0 ? "test-style-red" : "test-style-green"
                }
              >
                <td>{customer.name}</td>
                <td>{customer.orderValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 style={{color: "#2596be"}}>Hello</h1>
      </header>
    </div>
  );
};

export default App;
