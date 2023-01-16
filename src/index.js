import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fullName = "Dominic Torretto";
const user = {
  firstName: "Dominic",
  lastName: "Torretto",
};
const displayName = (user) => {
  return user.firstName + " " + user.lastName;
};
const oddOrEven = (number) => {
  if (number % 2 === 0)
  return 'Even'
  else
  return 'Odd'

};
const element = (
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
    <h2>{fullName}</h2>
    <h2>{1 + 1}</h2>
    <h2>{user.firstName + " " + user.lastName}</h2>
    <h2>{displayName(user)}</h2>
    <h2>{oddOrEven(99)}</h2>
  </div>
);
// root.render(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
