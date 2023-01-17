import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { Header2, Header3 } from "./header2";
import "./App-3.css";
import pic1 from "./squirrel.jpg";

const App = () => {
  return (
    <>
      <h1 className="text-base">text-base</h1>
      <h1 className="text-sm">text-sm</h1>
      <h1 className="text-md">text-md</h1>
      <h1 className="text-lg">text-lg</h1>
      <h1 className="text-xl">text-xl</h1>
      <h1 className="text-2xl">text-2xl</h1>
      <h1 className="text-red-300">text-red-300</h1>
      <h1 className="text-red-700">text-red-700</h1>
      <h1 className="text-blue-300">text-blue-300</h1>
      <h1 className="text-blue-700">text-blue-700</h1>
      <h1 className="text-center">text-center</h1>
      <h1 className="font-bold">font-bold</h1>
      <h1 className="text-2xl text-red-700 text-center font-bold italic underline">
        Combination
      </h1>
      <div className="bg-red-100 p-6">
        <div className="bg-yellow-100 p-2">around padding=2</div>
      </div>

      <div className="bg-yellow-300">No setting padding margin</div>
      <div className="bg-green-300 mt-6">margin top = 6</div>
      <div className="bg-red-300 pt-6">padding top = 6</div>
      <div className="bg-blue-300 ml-6">margin left = 6</div>
      <div className="bg-purple-300 pl-6">padding left = 6</div>
      <div className="bg-amber-300 text-right mr-4">margin right = 6</div>
      <div className="bg-cyan-300 text-right pr-4">padding right = 6</div>
      <div className="bg-red-400 py-4">padding y axis = 4</div>
      <div className="bg-yellow-400 pb-4">Hello World</div>
      <div className="bg-orange-400 p-4">Hello World</div>
      <div className="bg-green-400 m-4">Hello World</div>
      <div className="flex bg-blue-400 space-x-16">
        <div className="bg-red-400">01</div>
        <div className="bg-orange-400">02</div>
        <div className="bg-gray-400">03</div>
      </div>

      <div className="w-24 h-24 bg-orange-200 m-2">width 24 + Hight 24</div>
      <div className="w-1/2 bg-orange-200 m-2">width half - responsive</div>
      <div className="w-full bg-orange-200 m-2">width Full - responsive</div>
      <div className="w-screen bg-yellow-200 m-2">width screen - responsive</div>
      <div className="w-screen bg-green-200 mr-2">width screen inside width half</div>

      <div className="w-1/2 bg-green-200">
      <div className="text-right bg-red-200 mr-3">width full inside width half</div>
      {/* <div className="w-screen bg-yellow-200">width screen inside width half</div> */}
      </div>

      <div className="w-24 h-24 bg-red-400 rounded m-2 p-6">Round</div>
      <div className="w-24 h-24 bg-red-400 rounded-xl m-2 p-6">Round-XL</div>
      <div className="w-24 h-24 bg-red-400 rounded-full m-2 p-6">Round-Full</div>

      <div className="w-48 bg-pink-100 border-4 border-rose-500 border-dotted mt-4 p-5 text-center rounded-full">
      border-4 border-rose-500 border-dotted
      </div>
      <div className="w-48 bg-pink-100 border-4 border-rose-500 border-dashed mt-4 p-5 text-center rounded-full">
      border-4 border-rose-500 border-dashed
      </div>
      <div className="w-48 bg-pink-100 border-4 border-rose-500 border-solid mt-4 p-5 text-center rounded-full">
      border-4 border-rose-500 border-solid
      </div>
      <div className="w-48 bg-pink-100 border-4 border-rose-500 border-double mt-4 p-5 text-center rounded-full">
      border-4 border-rose-500 border-double
      </div>


      <div className="pb-64"></div>
    </>
  );
};

export default App;
