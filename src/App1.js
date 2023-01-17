import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Header from "./Header";
import { Header2, Header3 } from "./Header2";
import bondrungrot from "./bondrungrot.jpeg";
const App = () => {
  const number = 3;
  const customers = [
    {
      name: "Form",
      orderValue: 1200,
    },
    {
      name: "Pack",
      orderValue: 800,
    },
    {
      name: "Bond",
      orderValue: 1500,
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
        <div className="test-font-kanit">ลอง Font Kanit</div>
        <div style={{fontFamily: "Kanit"}}> Font Kanit อีกตัว</div>
        <table style={{ backgroundColor: "gray" }}>
          <thead>
            <th>Name</th>
            <th>Price</th>
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
          src="https://scontent-xsp1-1.xx.fbcdn.net/v/t39.30808-6/267420568_1790940334431739_3489610460655015216_n.png?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFAuHNcs8XA-ECbMdButw1zr0ZE6lTk1NqvRkTqVOTU2lwySFCCMIpSdaHxPnoTapXuzASFeuyEbjZIHTueH6rZ&_nc_ohc=Di8Y-a3BH9AAX_3F98A&_nc_ht=scontent-xsp1-1.xx&oh=00_AfArQ48_nnp3yFObxyY7ixuL1_cqbydB11lWvACmflqQrw&oe=63CA0C58"
        />
          {/*อันนี้มาจาก Public */}
        <img style={{ width: "200px" }} src="/bondrungrot.jpeg" />
        {/* อันนี้มาจาก src */}
        <img style={{ width: "200px" }} src={bondrungrot} />
      </header>
    </div>
  );
};
export default App;