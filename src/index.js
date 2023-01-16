import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fullName = "Dominic Torretto";
const displayName = (user) => {
  return user.firstName + " " + user.lastName;
};
const user = {
  firstName: "Dominic",
  lastName: "Torretto",
};
const oddOrEven = (number) => {
  if (number % 2 === 0) return "Even";
  else if (number % 2 === 1) return "odd";
};

const element = (
  <div>
    <h1>Hello</h1>
    <h2>World!</h2>
    {fullName}
    <br />
    {1 + 1}
    <br />
    {user.firstName + " " + user.lastName}
    <br />
    {displayName(user)}
    <br />
    {oddOrEven(9)}
    <br />
    {oddOrEven(10)}
  </div>
);

root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
