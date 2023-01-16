import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
// root.render(<App />);

//1.ประกาศตัวแปรชื่อ element ให้มีค่าเป็น div ที่มี string เป็น Hello
// const element = <div>Hello</div>;

// 2. ประกาศตัวแปรชื่อ element ให้มีค่าเป็น div ที่มี child element 2 ตัว
// ตัวแรก มีค่าเป็น h1 ที่มี string เป็น Hello
// ตัวที่สอง มีค่าเป็น h2 ที่มี string เป็น World!
// const element = (
//   <div>
//   <h1>Hello</h1>
//   <h2>World!</h2>
//   </div>
//   );

// 3. จากตัวอย่างข้างต้น จงแก้ไขตัวแปร element ให้สามารถนํา fullName ไปแสดง
// const fullName = 'Bond Rungrot Tatiyawongwiwat';
// const element = <div>{fullName}</div>;


//4.จากตัวอย่างข้างต้น ตัวแปร element จะ render ค่าใดออกมาเพราะอะไร,หากต้องการให้แสดงค่าการคํานวณเป็น 2 ต้องแก้ไขอย่างไร
// const element = <div>{ 6 + 4 }</div>

//5 จากตัวอย่างข้างต้น จงแก้ไขตัวแปร element ให้สามารถนํา firstName และ lastName ไปแสดงต่อกัน
// const user = {
//   firstName: 'Bond',
//   lastName: 'Rungrot'
//   }
//   const element = <div>{user.firstName}, {user.lastName}</div>
// root.render(element);


// 6. จากตัวอย่างข้างต้น จงแก้ไขตัวแปร element ให้เรียกการใช้งานฟังก์ชัน displayName เพื่อทําการแสดง full name ได้
const user = {
  firstName: 'Bond',
  lastName: 'Bond'
}
const displayName = '
const element = <div>{ displayName(user) }</div>

// 7. จงเขียนฟังก์ชันชื่อ oddOrEven ที่รับ parameter ชื่อ number โดยฟังก์ชันจะทําการ return string ว่า “odd” หาก input number เป็นเลขคี่และ return string ว่า “even” หาก input number เป็นเลขคู่
// const oddOrEven = (number) => {
//   if (number % 2 === 0)
//   return 'even'
//   else
//   return 'odd'
//   }
//   const element = <div>{ oddOrEven(100) }</div>
root.render(element);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

