import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const fullName = 'Dominic Torretto';
const user = {
  firstName: "Dominic",
  lastName: "Torretto",
};

const displayName = (user) => {
  return user.firstName + " " + user.lastName;
};

const oddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
// const element = <div><h1>Hello</h1><h2>World!</h2></div>;
// const element = <div>{fullName}</div>
const element = (
  <div>
    {displayName(user)}
    <div>{oddOrEven(5)}</div>
  </div>
);
// root.render(element);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
