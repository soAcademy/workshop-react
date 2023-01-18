import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <TailwindExample /> */}
    <Resume />
    {/* <App /> */}
  </React.StrictMode>
);



// results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
