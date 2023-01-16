import logo from "./logo.svg";
import "./App.css";

function App() {
  const element = <div>Hello</div>;
  const element2 = (
    <div>
      <h1>Hello</h1>
      <h2>World!</h2>
    </div>
  );
  const element3 = <div>{1 + 1}</div>;
  const fullName = "Khun boeing";
  const user = {
    firstName: "Khun",
    lastName: "Boeing !!",
  };

  const oddOrEven = (number) => {
    if (number % 2 === 0) return "even";
    else return "odd";
  };

  const myStyle = {
    color: "blue",
    backgroundColor: "red",
  };

  return (
    <>
      <div>{element}</div>
      <div>{element2}</div>
      <div>{fullName}</div>
      <div>{element3}</div>
      <div>{user.firstName + "  " + user.lastName}</div>
      <div>{oddOrEven(100)}</div>
      <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>
      <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>
      <div style={myStyle}>Hello Style!</div>
      <div className="blue-with-red">ข้อ 4 CSS workshop + ข้อ 5 font kanit</div>
    </>
  );
}

export default App;
