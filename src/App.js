// const App = () => {
//   return <h1 className="text-3xl font-bold underline">Hello World</h1>
// };
// import App from "./App1";
// import TailwindExample from "./TailwindExample";
// import Resume from "./Resume";
// import Shop from "./Shop";

// const App = () => {
//   return (
//     <>
// //     {/* <TailwindExample/> */}
// //     <Resume/>
//     </>
//   );
// };
// export default App;


// const App = () => {
//   const info
//   return (
//   <>
  
//   </>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <Shop/>
//   );
// };
// export default App;


Workshop ช่วงบ่ายอันแรก
const fruitBasket = {
  apple: 10,
  banana: 5,
  orange: 2
};
console.log(`I have ${fruitBasket.apple} apples, ${fruitBasket.banana} bananas, ${fruitBasket.orange} oranges`);

const fruitBasket2 = {
  apple: { amount: 10, color: "red" },
  banana: { amount: 5, color: "yellow" },
  orange: { amount: 2, color: "orange" }
};
console.log(`I have ${fruitBasket2.apple.amount} apples, and the color is ${fruitBasket2.apple.color}`);






// Workshop ช่วงบ่าย Template literals
// ข้อหนึ่ง replace with double quotes with backticks
const string = `string text line 1
string text line 2`;

// ข้อสอง replace with template literal
const a = 10;
const b = 20;
console.log(`Sum of a + b is: ${a + b}`);

// ข้อสาม replate with template literal
console.log(`Sum of a + b is: ${a + b} and Multiple of a * b is: ${a
  * b}`);

// ข้อสี่ replace with template literal
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
  console.log(`1 is an ${oddOrEven(1)} number.`)