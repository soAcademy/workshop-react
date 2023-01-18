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
import profileImage from "./images/phisite-960x960.jpg";

function App() {
  const myCV = {
    firstName: "John",
    lastName: "Johnson",
    profileImage: profileImage,
    contactInfo: {
      location: "Bangkok",
      tel: "+66 0000 0000",
      email: "john@example.com",
    },
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
