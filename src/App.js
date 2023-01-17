// import logo from "./logo.svg";
// import "./App.css";
// import "./my-style.css";
// import "./tailwind.css";
// import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";
// import ProductPage from "./ProductPage";
// import TailwindPlayGround from "./TailwindPlayground";
import Resume from "./Resume";

function App() {
  const myCV = {
    firstName: "John",
    lastName: "Johnson",
  };

  return (
    <div>
      {/* <ProductPage /> */}
      {/* <TailwindPlayGround /> */}
      <Resume {...myCV} />
    </div>
  );
}

export default App;
