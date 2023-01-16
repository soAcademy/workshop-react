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

  return (
    <>
      <div>{element}</div>
      <div>{element2}</div>
      <div>{fullName}</div>
      <div>{element3}</div>
      <div>{user.firstName + "  " + user.lastName}</div>
      <div>{(oddOrEven = {})}</div>
    </>
  );
}

export default App;
