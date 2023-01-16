import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Workshop Quiz
// Quiz 1
// const element = <div>Hello</div>;

// Quiz 2
// const element = (
//   <div>
//   <h1>Hello</h1>
//   <h2>World!</h2>
//   </div>
//   );

// Quiz 3
// const fullName = "Dominic Torretto";
// const element = <div>{fullName}</div>;

// Quiz 4
// const element = <div> {1 + 1} </div>;

// Quiz 5
//const user = {
//   firstName: "Dominic",
//   lastName: "Torretto",
// };
// const element = (
//   <div>
//     {user.firstName} {user.lastName}
//   </div>
// );

// Quiz 6
// const displayName = (user) => {
//   return user.firstName + " " + user.lastName;
// };
// const user = {
//   firstName: "Dominic",
//   lastName: "Torretto",
// };
// const element = <div>{displayName(user)}</div>;

// Quiz 7
// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// const number = 1;
// const element = <div>{oddOrEven(number)}</div>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
