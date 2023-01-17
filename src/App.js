import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

























// function App() {
  //ตรงนี้ใไว้เขียน HTML Code ไว้ได้เลย โดยเราจะประกาศตัวแปรก่อน return เช่นพวกชื่อลูกค้าและอื่น ๆ แล้วข้างนอกมันคือส่วนใหญ่จะเป็นชื่อ Component หรือเป็น Function ที่ยาว ๆ มาก ๆ ก็มาตั้งเป็นฟังก์ชัน
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