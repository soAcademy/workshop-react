import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Resume from './Resume.js';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);
// root.render(<Resume />);
// root.render("Hello World!");
// root.render(element);
reportWebVitals();



// งานตอนเช้า
// root.render(element);
// อะไรก็ตามที่เราเอามา render มันจะมาปรากฎบนหน้าจอ
// แล้วช่วงบ่ายเราก็มาสร้าง css โดยการ import App เข้ามาเลย พอเราเปลี่ยนจาก element มาเป็น App เราก็มาเปลี่ยน app 


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
// const displayName = (user) => {
//   return user.firstName + ' ' + user.lastName
// }
// const user = {
//   firstName: 'Bond',
//   lastName: 'Rungrot'
// }
// const element = <div>{ displayName(user) }</div>

// 7. จงเขียนฟังก์ชันชื่อ oddOrEven ที่รับ parameter ชื่อ number โดยฟังก์ชันจะทําการ return string ว่า “odd” หาก input number เป็นเลขคี่และ return string ว่า “even” หาก input number เป็นเลขคู่
// const oddOrEven = (number) => {
//   if (number % 2 === 0)
//   return 'even'
//   else
//   return 'odd'
//   }
//   const element = <div>{ oddOrEven(100) }</div>

// root.render(element);
// reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// งานตอนบ่าย ดึงมาจาก app.js
// 1. เปลี่ยนสีคำโดยใช้ Inline
// function App() {
//ตรงนี้ใไว้เขียน HTML Code ไว้ได้เลย โดยเราจะประกาศตัวแปรก่อน return เช่นพวกชื่อลูกค้าและอื่น ๆ แล้วข้างนอกมันคือส่วนใหญ่จะเป็นชื่อ Component หรือเป็น Function ที่ยาว ๆ มาก ๆ ก็มาตั้งเป็นฟังก์ชัน
//     return (
//       <h1 style={{color: "blue"}}>Hello Blue Header!</h1>
//     );
//   }
//   export default App;

// 2. การสร้างสีพื้นหลังคำโดยใช้ Inline
// function App() {
//     return (
//       <h1 style={{backgroundColor: "red"}}>Hello Red Background!</h1>
//    );
//  }
//   export default App;

// 3. ลืมปีกกา แล้วก็เอาตัว const ออกด้วยครับ? ประกาศ Object myStyle เพื่อเปลี่ยน element ให้มีข้อความสีฟ้าพื้นหลังสีแดง
// function App() {
//   const myStyle = {
//       color: "blue",
//       backgroundColor: "red",
//   }
//     return (
//       <div style={myStyle}>Hello Style!</div>
//   );
// }
// export default App;

// 4. อันนี้ลืม import file มาแล้วก็ย้าย function มาไว้ข้างบนด้วยจ้า import file มาเลยจากข้อ 3 จงสร้างไฟล์ my-style.css และย้าย object ไปเรียกใช้ css ผ่านไฟล์นั้น
// import "./mystyle.css"
// function App() {
//         return (
//         <h1 className= "white-with-red">Hello Red Background!</h1>
//      );
//    }
//     export default App;

// 5. งง? จากข้อที่แล้ว ให้เราเปลี่ยน Font ให้เป็น Font Kanit ที่มีขนาด 24px
//     function App() {
//       return (
//       <h1 style={{backgroundColor: "red"}}>Hello Red Background!</h1>
//    );
//  }
//   export default App;