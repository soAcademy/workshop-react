import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";

import DoubleHippo2 from "./hippo2.jpg";

const f1 = (x) => x * 3;

const App1 = () => {
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
  const products = ["Collagen", "Vitamin C", "Fiber"];

  const totalOrder = customers.reduce((acc, r) => acc + r.orderValue, 0);

  const aboutMe = "My name is...";
  const workExperiences = [
    {
      company: "",
      jobDescription: "",
      year: ""
    }
  ]

  const educations = [{
    school: "",
    year: "",
    gpa: ""
  }]

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
        <div className={styles["test-styles-red"]}>Test Style</div>
        <div
          className={number % 2 === 0 ? "test-style-red" : "test-style-green"}
        >
          Test Style
        </div>
        <div>Total Order: {totalOrder}</div>
        <Header />
        <Header2 />
        <Header3 />
        <div className="test-font-kanit">ทดสอบ Font Kanit</div>
        <div style={{ fontFamily: "Kanit" }}>ทดสอบ Font Kanit 2</div>
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
        <h1 style={{ color: "#2596be" }}>Hello</h1>
        <img
          style={{ width: "200px" }}
          src="https://img.freepik.com/premium-vector/cute-hippo-mascot-character-logo-cartoon-icon-illustration-flat-cartoon-style-design_422763-842.jpg?w=2000"
        />
        <img style={{ width: "200px" }} src="/hippo1.jpg" />
        <img style={{ width: "200px" }} src={DoubleHippo2} />
        {number === 3 && (
          <ul>
            {products.map((product) => (
              <li>{product}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App1;