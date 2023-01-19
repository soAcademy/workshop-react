// WORKSHOP ตอนบ่ายตัวแรก
1.จงสร้าง “Hello world” ที่มีสีแดงความเข้ม 700 ขนาด 3xl ตัวหนา และขีดเส้นใต้
const App = () => {
  return <p className="text-red-700 text-3xl text-center font-bold underline italic">"Hello Bond"</p>
};
export default App;

2.เจงสร้าง div ต่อไปนี้ มีเรื่อง W-H ด้วย
- div ที่ 1 ชื่อ “w-24” มีขนาด 24 สูง 38 พื้นหลังสีฟ้าเข้ม 500
- div ที่ 2 ชื่อ “w-1/2” มีขนาด ครึ่งหนึ่งของความกว้างทั้งหมด สูง 38 พื้นหลังสีเหลืองเข้ม 300 และขอบ
const App = () => {
  return (
    <>
      <div className="bg-blue-500 w-24 h-38 m-4 p-4 rounded-lg">w-24</div>
      <div className="bg-yellow-300 w-1/2 h-38 m-4 p-4 rounded-lg">w-1/2</div>
    </>
  )
};
export default App;

3. จงเขียน button ต่อไปนี้ มีสองข้อย่อย
- button ที่ 1 ชื่อ “Button 1” มีขนาด 24 พื้นหลังสีเขียวเข้ม 200 เมื่อมีการ hover ให้เปลี่ยนเป็นเข้ม 800
- button ที่ 2 ชื่อ “Button 2” มีขนาด 36 พื้นหลังแดงเข้ม 200 เมื่อมีการ click ให้เปลี่ยนเป็นเข้ม 500 และแสดง focus ขอบเป็นสีแดงเข้ม 800
const App = () => {
  return (
  <>
  <div>
  <button className="center w-36 bg-green-200 hover:bg-green-800 m-4 p-4 rounded">Button 1</button>
  </div>
  <button className="w-36 bg-red-200 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-800 m-4 p-4 rounded">Button 2</button>
  </>
  )
};
export default App;



************************************************************************************************
// WORKSHOP ตอนบ่ายตัวที่สอง
const App = () => {
  return (
    <>
      <div className="w-1/3 bg-gray-700 m-4 p-4 rounded-md">
        <div>
          <img
            className="w-full rounded-md"
            src="https://media-cdn.bnn.in.th/140568/iPhone_13_Pro_Max_Sierra_Blue_1-square_medium.jpg"
          />
        </div>
        <div>
          <h1 className="text-xl text-white mt-4 font-bold">
            {" "}
            Iphone 13 Pro Max
          </h1>
        </div>
        <p className="text-gray-300 mt-2"> Buy 2 get 1 FREE</p>
        <div className="text-right text-amber-500 text-xs">32,000</div>
        <div>
          <button className="w-full rounded-md bg-blue-400 hover:bg-blue-400 active:bg-red-200">
            {" "}
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
};
export default App;

// งานสร้าง responsive product interface
const App = () => {
  return (
    <>
      <div className="grid gap-2 grid-cols md:grid-cols-2 lg:grid-cols-3">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <Product />
        ))} */}
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
    </>
  );
};
export default App;
