import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import header from './header';
import './myStyle.css' 
const myStyles = {
  color:'blue',
  backgroundColor:'red',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// const displayName =(user)=>{
//   return user.firstName+ ' '+user.lastName
// };
// const user = {
//   firstName: "John",
//   lastName: "Doe",
// };

const element = <div>
    {/* {displayName(user )} */}
    <h1 style={{color:'blue'}}>Hello Blue Header</h1>
    <h1 style={{backgroundColor:'red'}}> Hello Red Background</h1>
    <div style={myStyles}>Hello style</div>
    <div className='blue-background'>Hello Style by import</div>
    <div className='blue-with-red-kanit'>Hello Kanit font</div>
</div>


root.render(
  element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
