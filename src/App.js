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
import fruitBasket from "./fruitBasket.json";

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
    aboutInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
  };

  console.log(`I have ${fruitBasket.apple} apples, ${fruitBasket.banana} bananas, 
${fruitBasket.orange} oranges`);

  const fruitBasket2 = {
    apple: { amount: 10, color: "red" },
    banana: { amount: 5, color: "yellow" },
    orange: { amount: 2, color: "orange" },
  };

  console.log(
    `I have ${fruitBasket2.apple.amount} apples, and the color is ${fruitBasket2.apple.color}`
  );

  return (
    <div>
      {/* <ProductPage /> */}
      {/* <TailwindPlayGround /> */}
      <Resume {...myCV} />
    </div>
  );
}

export default App;
