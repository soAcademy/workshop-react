// import logo from "./logo.svg";
// import "./App.css";
// import "./my-style.css";
import "./tailwind.css";
// import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";

function App() {
  const myCV = {
    firstName: "John",
    lastName: "Johnson",
  };

  return (
    <div className="App">
      <div className="flex flex-row h-screen">
        <div className="basis-1/4 bg-indigo-500 p-4">
          <h2 className="text-xl">About Me</h2>
        </div>
        <div className="basis-3/4 p-4">
          <h1 className="text-2xl">
            {myCV.firstName} {myCV.lastName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
