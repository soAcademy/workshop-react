// import logo from "./logo.svg";
import "./App.css";
// import "./my-style.css";
// import "./tailwind.css";
// import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";

function App() {
  const myCV = {
    firstName: "John",
    lastName: "Johnson",
  };

  const { firstName, lastName } = myCV;

  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="basis-1/4 bg-indigo-500 p-4 text-left">
          <h2 className="text-xl">About Me</h2>
        </div>
        <div className="basis-3/4 p-4 text-left">
          <h1 className="text-2xl">
            {firstName} {lastName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
