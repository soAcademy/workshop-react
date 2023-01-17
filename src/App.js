import logo from './logo.svg';
import './App.css';
import Header from './Header.js';


// function App() {
//   //ตรงนี้ใไว้เขียน HTML Code ไว้ได้เลย โดยเราจะประกาศตัวแปรก่อน return เช่นพวกชื่อลูกค้าและอื่น ๆ แล้วข้างนอกมันคือส่วนใหญ่จะเป็นชื่อ Component หรือเป็น Function ที่ยาว ๆ มาก ๆ ก็มาตั้งเป็นฟังก์ชัน
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             อะไรวะเนี่ย
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
  
//   export default App;



// 1. เปลี่ยนสีคำโดยใช้ Inline
  // function App() {
  //   //ตรงนี้ใไว้เขียน HTML Code ไว้ได้เลย โดยเราจะประกาศตัวแปรก่อน return เช่นพวกชื่อลูกค้าและอื่น ๆ แล้วข้างนอกมันคือส่วนใหญ่จะเป็นชื่อ Component หรือเป็น Function ที่ยาว ๆ มาก ๆ ก็มาตั้งเป็นฟังก์ชัน
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

  // 3. ประกาศ Object myStyle เพื่อเปลี่ยน element ให้มีข้อความสีฟ้าพื้นหลังสีแดง
      // function App() {
      //     return (
      //       const myStyle = {
      //         color: "blue",
      //         backgroundColor: "red",
      //         }
      //       <div style={myStyle}>Hello Style!</div>
      //   );
      // }
      // export default App;

    // 4. จากข้อ 3 จงสร้างไฟล์ my-style.css และย้าย object ไปเรียกใช้ css ผ่านไฟล์นั้น
      function App() {
        return (
          <h1 style={{backgroundColor: "red"}}>Hello Red Background!</h1>
       );
     }
      export default App;