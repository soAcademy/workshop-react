// const App = () => {
//   return <h1 className="text-3xl font-bold underline">Hello World</h1>
// };

// export default App;
// //text = xs, sm, base, md, lg, xl, 2xl

// const App = () => {
//   return (
//     <>
//       <h1 className="text-ls">ตัวหนังสือ ธรรมดา</h1>
//       <p className="text-base">ตัวหนังสือ ธรรมดา</p>
//       <h1 className="text-xl">ตัวหนังสือ xl</h1>
//       <h1 className="text-3xl">ตัวหนังสือ 3xl</h1>
//       <h1 className="text-lg">ตัวหนังสือ ขนาดจอคอมlg</h1>
//       <h1 className="text-red-500">ตัวหนังสือ สีแดงเข้มระดับ 500</h1>
//       <h1 className="text-yellow-500">ตัวหนังสือ เหลืองเข็มระดับ 500</h1>
//       <p className="text-black-500">Hello World</p>
//       <p className="text-primary">ตัวหนังสือ แบบ primary</p>
//       <p className="text-secondary">ตัวหนังสือ แบบ secondary</p>
//       <p className="text-gray-400">ตัวหนังสือ เทาระดับ 400</p>
//       <p className="text-black">ตัวหนังสือ ดำ</p>
//       <p className="text-black">ตัวหนังสือ Alignment</p>
//       <p className="text-center">ตัวหนังสือ อยู่ตรงกลาง</p>
//       <p className="text-right">ตัวหนังสือ อยู่ทางขวา</p>
//       <p className="text-left">ตัวหนังสือ อยู่ทางซ้าย</p>
//       <p className="text-black">ตัวหนังสือ FontWeight</p>
//       <p className="font-bold">ตัวหนังสือ ตัวหนา</p>
//       <p className="font-semibold">ตัวหนังสือ หนาครึ่งหนึ่ง</p>
//       <p className="font-light">บาง</p>
//       <p className="italic">ตัวเอียง</p>
//       <p className="underline">Hello World</p>
//       <p className="text-green-300 text-center font-bold underline italic">
//       ตัวหนังสือสีเขียว ตรงกลาง ตัวหนา ขีดเส้นใต้ และตัวเอียง{" "}
//       </p>
//       <div className="bg-yellow-300">พื้นหลังสี่เหลือง</div>
//       <div className="bg-red-300 pt-4">พื้นหลังสีแดงระดับ 300 เว้นบรรทัดบน 4</div>
//       <div className="bg-green-300 mt-4">พื้นหลังเขียวระดับ 300 หุบเข้าจากข้างบน 4</div>
//       <div className="bg-blue-300 ml-4">พื้นหลังฟ้า แท็ปหนึ่งออกจากขอบมา 4</div>
//       <div className="bg-purple-300 pl-4">พื้นหลังสีม่วง เว้นจากกรอบซ้าย</div>
//       <div className="bg-amber-300 text-right mr-4">พ้นหลังเหลืองเว้นขอบทั้งหมดทางขวา</div>
//       <div className="bg-cyan-300 text-right pr-4">พื้นหลังสีฟ้า เว้นขอบหนังสือทางขวา</div>
//       <div className="bg-red-400 py-4">พื้นหลังสี่แดง เว้นบรรทัดบนล่างที่ 4</div>
//       <div className="bg-yellow-400 pb-4">พื้นหลังสีเหลือง เว้นบรรทัดล่าง</div>
//       <div className="bg-orange-400 p-4">พื้นหลังสีส้ม เว้นบรรทัดหน้าบนและล่าง</div>
//       <div className="bg-green-400 m-4">พื้นหลังสีเขียว ดึงกรอบเข้าหาตัว</div>
//       <div className="flex bg-blue-400 space-x-16"> //อันนีดี เหมือนสร้างพื้นที่ให้เรา
//         <div className="bg-red-400">พื้นหลังสีแดงระดับ 400</div>
//         <div className="bg-orange-400">พื้นหลังสีส้มระดับ 400</div>
//         <div className="bg-gray-400">พื้นหลังสีเทาระดับ 400</div>
//         <div className="pb-64">ชิดขวาไปดิ </div>
//       </div>

//       <div className="w-24 bg-red-700">กว้าง 24 พื้นหลังสีแดง</div>
//       <div className="w-32 bg-yellow-700">กว้าง 34 พื้นหลังสีเหสืองความเข้มระดับ 700</div>
//       <div className="w-3/12 bg-blue-300">ความกว้างระดับ 3/12 พื้นหลังสีฟ้าความเข้มระดับ 400</div>
//       <div className="w-1/2 bg-green-300">กว้างครึ่งหนึ่ง พื้นหลังสีเขียวความเข้มระดับ 300</div>
//       <div className="w-1/3 bg-cyan-300"> ความกว้าง 1/3 พื้นหลังสีฟ้ามั้ง?</div>
//       <div className="w-3/4 bg-amber-300">กว้าง 3/4 พื้นหลังสีเหลือง</div>
//       <div className="w-3/5 bg-yellow-300">กว้าง 3/5 พื้นหลังเหลือง</div>
//       <div className="w-full bg-red-300">กว้างเต็ม พื้นหลังแดงระดับ 300</div>
//       <div className="bg-green-300 m-4 p-4 rounded">พื้นหลังเขียวระดับ 300 ดึงกรอบเข้าหาตัว เว้นบรรทัดหน้าบนล่าง แบบมน</div>
//       <div className="bg-red-300 m-4 p-4 rounded-lg">พื้นหลังสีแดง ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมน lg</div>
//       <div className="bg-red-300 m-4 p-4 rounded-lg">เหมือนข้างบน lg คือขนาดจอคอม 1/4</div>
//       <div className="bg-red-300 m-4 p-4 rounded-md">เหมือนข้างบน md คือขนาดไอแพด 1/3</div>
//       <div className="bg-yellow-300 m-4 p-4 rounded-xl">พื้นหลังสีเหลือง ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมน lx</div>
//       <div className="bg-blue-300 m-4 p-4 rounded-full">พื้นหลังสีฟ้า ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมนขั้นสุด</div>
//       <div className="bg-purple-300 w-20 m-4 p-4 rounded-full">พื้นหลังสีม่วง กว้าง 20 กลมทั้งก้อน</div>
//       <div className="bg-green-300 h-8">พื้นหลังสีเขียวระดับ 300 สูงจากฐาน 8</div>
//       <div className="bg-red-300 h-24">พื้นหลังสีแดง สูงจากพื้น 24</div>
//       <div className="bg-blue-300 h-32">พื้นหลังสีน้ำเงิน สูงจากพื้น 32</div>
//       <div className="bg-gray-300 h-screen">พื้นหลังสีเทา สูงจากสกรีนเต็ม</div>
//       <div className="bg-green-300 w-screen">พื้นหลังสีเขียว กว้างเท่าสกรีน</div>
      
//       <div className="w-64 bg-red-700 m-4">
//         อิหยังเนี่ย
//         <div className="w-full bg-yellow-300">คืออะไรวะ?</div>
//         <div className="w-screen bg-green-300">คืออะไรเนี่ย?</div>
//       </div>

//       <div className="w-64 bg-red-700 rounded-lg">
//         <div className="w-2/3 bg-green-300 rounded-full p-4">สร้างพื้นหลังแล้วเอาอีกอันมาซ้อน</div>
//       </div>

//       <div className="w-64 bg-gray-300 border-2 border-rose-300 border-dotted mt-4 py-2 text-center rounded-full">
//         อันนี้งงเลย จะอธิบายไง
//       </div>
//       <div className="pb-64"></div>
//     </>
//   );
// };
// export default App;

// 1.จงสร้าง “Hello world” ที่มีสีแดงความเข้ม 700 ขนาด 3xl ตัวหนา และขีดเส้นใต้
// const App = () => {
//   return <p className="text-red-700 text-3xl text-center font-bold underline italic">"Hello Bond"</p>
// };
// export default App;

// 2.เจงสร้าง div ต่อไปนี้ มีเรื่อง W-H ด้วย
// - div ที่ 1 ชื่อ “w-24” มีขนาด 24 สูง 38 พื้นหลังสีฟ้าเข้ม 500
// - div ที่ 2 ชื่อ “w-1/2” มีขนาด ครึ่งหนึ่งของความกว้างทั้งหมด สูง 38 พื้นหลังสีเหลืองเข้ม 300 และขอบ
// const App = () => {
//   return (
//     <>
//       <div className="bg-blue-500 w-24 h-38 m-4 p-4 rounded-lg">w-24</div>
//       <div className="bg-yellow-300 w-1/2 h-38 m-4 p-4 rounded-lg">w-1/2</div>
//     </>
//   )
// };
// export default App;

























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
// export default App;
