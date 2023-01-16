import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <div>Hello</div>
const element2 = <div>
  <h1>Hello</h1>
  <h2>World!</h2>
  </div>
const fullName = 'Dominic Torretto'
const element3 = <div>{fullName}</div>
const element4 = <div>{1+1}</div>
const user = {
  firstName: 'Dominic',
  lastName: 'Torretto'
}
const element5 = <div>{user.firstName} {user.lastName}</div>
const displayName = (user) => {
  return user.firstName + ' ' + user.lastName
}
const element6 = <div>{displayName(user)}</div>
const oddOrEven = (number) => {
  return number % 2 !== 0 ? 'odd' : 'even'
} 
const element7 = <div>Number 7 is {oddOrEven(7)}</div>

root.render(element7);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
