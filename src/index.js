import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//Q1
const element = <div>Hello</div>;
root.render(element);
//Q2
const element1 = <div>
  <h1>Hello</h1>
  <h2>World!</h2>
</div>
//Q3
const fullName = 'Dominic Torretto'
const element2 = <div>{fullName}</div>
//Q4
const element3 = <div> {1 + 1} </div>
root.render(element3);
//Q5
const user = {
  firstName: 'Dominic',
  lastName: 'Torretto'
}
const element4 = <div>{user.firstName + user.lastName}</div>
root.render(element4);
//Q6
const displayName = (user) => {
  return user.firstName + ' ' + user.lastName
}
const user1 = {
  firstName: 'Dominic',
  lastName: 'Torretto'
}
const element5 = <div>{displayName(user1)}</div>
root.render(element5);
//Q7
const oddOrEven = number => {
  if (number % 2 !== 0) {
    return 'odd';
  } else {
    return 'even';
  }
  
}
const element6 = <div>{oddOrEven(100)}</div>
root.render(element6);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
