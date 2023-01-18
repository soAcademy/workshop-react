import Product from "./Product";
import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";


export const TailwindExample= () => {
  return (
    <>
      <h1 className="text-ls">ตัวหนังสือ ธรรมดา</h1>
      <p className="text-base">ตัวหนังสือ ธรรมดา</p>
      <h1 className="text-xl">ตัวหนังสือ xl</h1>
      <h1 className="text-3xl">ตัวหนังสือ 3xl</h1>
      <h1 className="text-lg">ตัวหนังสือ ขนาดจอคอมlg</h1>
      <h1 className="text-red-500">ตัวหนังสือ สีแดงเข้มระดับ 500</h1>
      <h1 className="text-yellow-500">ตัวหนังสือ เหลืองเข็มระดับ 500</h1>
      <p className="text-black-500">Hello World</p>
      <p className="text-primary">ตัวหนังสือ แบบ primary</p>
      <p className="text-secondary">ตัวหนังสือ แบบ secondary</p>
      <p className="text-gray-400">ตัวหนังสือ เทาระดับ 400</p>
      <p className="text-black">ตัวหนังสือ ดำ</p>
      <p className="text-black">ตัวหนังสือ Alignment</p>
      <p className="text-center">ตัวหนังสือ อยู่ตรงกลาง</p>
      <p className="text-right">ตัวหนังสือ อยู่ทางขวา</p>
      <p className="text-left">ตัวหนังสือ อยู่ทางซ้าย</p>
      <p className="text-black">ตัวหนังสือ FontWeight</p>
      <p className="font-bold">ตัวหนังสือ ตัวหนา</p>
      <p className="font-semibold">ตัวหนังสือ หนาครึ่งหนึ่ง</p>
      <p className="font-light">บาง</p>
      <p className="italic">ตัวเอียง</p>
      <p className="underline">Hello World</p>
      <p className="text-green-300 text-center font-bold underline italic">
      ตัวหนังสือสีเขียว ตรงกลาง ตัวหนา ขีดเส้นใต้ และตัวเอียง{" "}
      </p>
      <div className="bg-yellow-300">พื้นหลังสี่เหลือง</div>
      <div className="bg-red-300 pt-4">พื้นหลังสีแดงระดับ 300 เว้นบรรทัดบน 4</div>
      <div className="bg-green-300 mt-4">พื้นหลังเขียวระดับ 300 หุบเข้าจากข้างบน 4</div>
      <div className="bg-blue-300 ml-4">พื้นหลังฟ้า แท็ปหนึ่งออกจากขอบมา 4</div>
      <div className="bg-purple-300 pl-4">พื้นหลังสีม่วง เว้นจากกรอบซ้าย</div>
      <div className="bg-amber-300 text-right mr-4">พ้นหลังเหลืองเว้นขอบทั้งหมดทางขวา</div>
      <div className="bg-cyan-300 text-right pr-4">พื้นหลังสีฟ้า เว้นขอบหนังสือทางขวา</div>
      <div className="bg-red-400 py-4">พื้นหลังสี่แดง เว้นบรรทัดบนล่างที่ 4</div>
      <div className="bg-yellow-400 pb-4">พื้นหลังสีเหลือง เว้นบรรทัดล่าง</div>
      <div className="bg-orange-400 p-4">พื้นหลังสีส้ม เว้นบรรทัดหน้าบนและล่าง</div>
      <div className="bg-green-400 m-4">พื้นหลังสีเขียว ดึงกรอบเข้าหาตัว</div>
      <div className="flex bg-blue-400 space-x-16"> //อันนีดี เหมือนสร้างพื้นที่ให้เรา
        <div className="bg-red-400">พื้นหลังสีแดงระดับ 400</div>
        <div className="bg-orange-400">พื้นหลังสีส้มระดับ 400</div>
        <div className="bg-gray-400">พื้นหลังสีเทาระดับ 400</div>
        <div className="pb-64">ชิดขวาไปดิ </div>
      </div>

      <div className="w-24 bg-red-700">กว้าง 24 พื้นหลังสีแดง</div>
      <div className="w-32 bg-yellow-700">กว้าง 34 พื้นหลังสีเหสืองความเข้มระดับ 700</div>
      <div className="w-3/12 bg-blue-300">ความกว้างระดับ 3/12 พื้นหลังสีฟ้าความเข้มระดับ 400</div>
      <div className="w-1/2 bg-green-300">กว้างครึ่งหนึ่ง พื้นหลังสีเขียวความเข้มระดับ 300</div>
      <div className="w-1/3 bg-cyan-300"> ความกว้าง 1/3 พื้นหลังสีฟ้ามั้ง?</div>
      <div className="w-3/4 bg-amber-300">กว้าง 3/4 พื้นหลังสีเหลือง</div>
      <div className="w-3/5 bg-yellow-300">กว้าง 3/5 พื้นหลังเหลือง</div>
      <div className="w-full bg-red-300">กว้างเต็ม พื้นหลังแดงระดับ 300</div>
      <div className="bg-green-300 m-4 p-4 rounded">พื้นหลังเขียวระดับ 300 ดึงกรอบเข้าหาตัว เว้นบรรทัดหน้าบนล่าง แบบมน</div>
      <div className="bg-red-300 m-4 p-4 rounded-lg">พื้นหลังสีแดง ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมน lg</div>
      <div className="bg-red-300 m-4 p-4 rounded-lg">เหมือนข้างบน lg คือขนาดจอคอม 1/4</div>
      <div className="bg-red-300 m-4 p-4 rounded-md">เหมือนข้างบน md คือขนาดไอแพด 1/3</div>
      <div className="bg-yellow-300 m-4 p-4 rounded-xl">พื้นหลังสีเหลือง ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมน lx</div>
      <div className="bg-blue-300 m-4 p-4 rounded-full">พื้นหลังสีฟ้า ดึงเข้าหาตัว เว้นบรรทัดหน้าบนล่าง ขอบมนขั้นสุด</div>
      <div className="bg-purple-300 w-20 m-4 p-4 rounded-full">พื้นหลังสีม่วง กว้าง 20 กลมทั้งก้อน</div>
      <div className="bg-green-300 h-8">พื้นหลังสีเขียวระดับ 300 สูงจากฐาน 8</div>
      <div className="bg-red-300 h-24">พื้นหลังสีแดง สูงจากพื้น 24</div>
      <div className="bg-blue-300 h-32">พื้นหลังสีน้ำเงิน สูงจากพื้น 32</div>
      <div className="bg-gray-300 h-screen">พื้นหลังสีเทา สูงจากสกรีนเต็ม</div>
      <div className="bg-green-300 w-screen">พื้นหลังสีเขียว กว้างเท่าสกรีน</div>
      <div className="w-[400px]">อันนี้จะเป็นตัวที่บอกว่า เราสามารถปรับพีเอฟได้เลยตามที่ต้องการ</div>
      <div className="w-64 bg-red-700 m-4">
        อิหยังเนี่ย
        <div className="w-full bg-yellow-300">คืออะไรวะ?</div>
        <div className="w-screen bg-green-300">คืออะไรเนี่ย?</div>
      </div>

      <div className="w-64 bg-red-700 rounded-lg">
        <div className="w-2/3 bg-green-300 rounded-full p-4">สร้างพื้นหลังแล้วเอาอีกอันมาซ้อน</div>
      </div>

      <button className="w-64 p-4 rounded-full bg-sky-600 hover:bg-sky-400 active:bg-red-300">
        Hello World
      </button>
      <div className="bg-red-300 md:bg-red-500 lg:bg-red-700 m-4">
        Hello World
      </div>
      <button className="w-12 md:w-24 lg:w-36 p-4 rounded-full bg-sky-600 hover:bg-sky-400 active:bg-red-300">
        Hello World
      </button>
      <div className="flex bg-red-200 mt-2">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 bg-green-300">Hello World</div>
        <div className="w-1/2 md:w-2/3 lg:w-3/4 bg-yellow-300">Hello World</div>
      </div>

      <div className="w-[400px] h-[100px] bg-red-700">Hello World</div>
      <Product />

      {/* <div className="grid gap-2 grid-cols-3">
        <div className="bg-red-100">1</div>
        <div className="bg-red-200">2</div>
        <div className="bg-red-300">3</div>
        <div className="bg-red-400">4</div>
        <div className="bg-red-500">5</div>
        <div className="bg-red-600">6</div>
      </div>

      <div className="grid gap-2 grid-cols sm:grid-cols-2 md:grid-cols-3">
        {[...Array(7).keys()].map(() => (
          <Product />
        ))}
      </div> */}

      <div className="">
        <div className="w-1/3 bg-yellow-100">กว้าง 1/3 พื้นหลังสีเหลือง 100</div>
        <div className="w-2/3 bg-green-100">กว้าง 2/3 พื้นหลังสีเขียว 100</div>
      </div>

      <div className="flex">
        <div className="w-1/3 bg-yellow-200">Hello</div>
        <div className="w-2/3 bg-green-200">Hello</div>
      </div>

      <div className="flex">
        <div className="w-4/6 bg-yellow-300">ซ้าย</div>
        <div className="w-1/6 bg-green-300">กลาง</div>
        <div className="w-1/6 bg-blue-300">ขวา</div>
      </div>

      <div className="flex w-full">
        <div className="w-64 bg-red-300">ซ้ายกว้างเต็มจอ</div>
        <div className="flex-auto bg-orange-300">กลางกว้างเต็มจอ</div>
        <div className="w-1/6 bg-gray-300">ขวากว้างเต็มจอ</div>
      </div>

      <div className="flex bg-gray-100 h-[300px]">
        <div className="w-1/3 bg-amber-200 shadow-lg">เหลืองใหญ่ซ้าย</div>
        <div className="w-2/3 bg-blue-100">
          <div className="flex">
            <div className="w-1/3 bg-green-100 shadow-lg">มีเงา</div>
            <div className="w-2/3 bg-red-100 shadow">มีเงาเหมือนกัน</div>
          </div>
          <hr className="my-2" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-64">
        <div className="bg-green-200 h-64 sm:w-1/3">
          <div className="float-left">ทางซ้าย</div>{" "}
          <div className="-mt-3 text-red-700 text-4xl float-left">
            <FaAngellist />
          </div>
          <div className="-mt-3 text-purple-400 text-4xl ml-4"><FaAffiliatetheme /></div>

        </div>
        <div className="bg-red-200 h-64 sm:w-2/3">ทางขวา</div>
      </div>
      <div className="pb-64"></div>
    </>
  );
};
// t (top), b (bottom), l (left), r (right), y (top and bottom), x (left and right)
// xs, sm, base, md, lg, xl, 2xl
// yarn add react-icons
// export default App;
export default TailwindExample;