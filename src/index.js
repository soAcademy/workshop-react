import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./my-style.css";

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

const myStyle = {
  color: "Blue",
  backgroundColor: "red",
};

const element = (
  <div>
    <h1>Workshop 1 ANS React JSX</h1>
    <h1>Hello</h1>
    <h2>World!</h2>
    <p>{fullName}</p>
    <br />
    <p>{1 + 1}</p>
    <br />
    <p>{user.firstName + " " + user.lastName}</p>
    <br />
    <p>{displayName(user)}</p>
    <br />
    <p>{oddOrEven(9)}</p>
    <br />
    <p>{oddOrEven(10)}</p>
    <hr />
    <h1>Workshop 2 CSS</h1>
    <br />
    <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>
    <h1 style={{ backgroundColor: "red" }}>Hello Red background</h1>
    <div style={myStyle}>Hello Style!</div>
    <br />
    <div className="blue-and-red">Hello Style!</div>
    <hr />
  </div>
);

root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
