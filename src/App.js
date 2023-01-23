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
// import fruitBasket from "./fruitBasket.json";

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
    workExpList: [
      {
        place: "Company A",
        city: "Bangkok",
        startDate: 2011,
        endDate: 2014,
        title: "Position A",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
      {
        place: "Company B",
        city: "Bangkok",
        startDate: 2015,
        endDate: 2018,
        title: "Position B",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
      {
        place: "Company C",
        city: "Bangkok",
        startDate: 2019,
        endDate: 2022,
        title: "Position C",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
    ],
    eduExpList: [
      {
        place: "School A",
        city: "Bangkok",
        startDate: 2003,
        endDate: 2005,
        title: "Degree A",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
      {
        place: "University B",
        city: "Bangkok",
        startDate: 2006,
        endDate: 2008,
        title: "Degree B",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
      {
        place: "University C",
        city: "Bangkok",
        startDate: 2009,
        endDate: 2010,
        title: "Degree C",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
      },
    ],
  };

  //   console.log(`I have ${fruitBasket.apple} apples, ${fruitBasket.banana} bananas,
  // ${fruitBasket.orange} oranges`);

  //   const fruitBasket2 = {
  //     apple: { amount: 10, color: "red" },
  //     banana: { amount: 5, color: "yellow" },
  //     orange: { amount: 2, color: "orange" },
  //   };

  //   console.log(
  //     `I have ${fruitBasket2.apple.amount} apples, and the color is ${fruitBasket2.apple.color}`
  //   );

  //   const string = `string text line 1
  // string text line 2`;
  //   // quiz 1: replace double quotes with backticks

  //   const a = 10;
  //   const b = 20;
  //   console.log(`Sum of a + b is: ${a + b}`);
  //   // quiz 2: replace with template literal

  //   console.log(`Sum of a + b is: ${a + b} and\n Multiple of a * b is: ${a * b}`);
  //   // quiz 3: replace with template literal

  //   const oddOrEven = (number) => {
  //     if (number % 2 === 0) {
  //       return "even";
  //     } else {
  //       return "odd";
  //     }
  //   };
  //   console.log(`1 is an ${oddOrEven(1)} number.`);
  //   // quiz 4: replace with template literal

  return (
    <>
      {/* <ProductPage /> */}
      {/* <TailwindPlayGround /> */}
      <Resume {...myCV} />
    </>
  );
}

export default App;
