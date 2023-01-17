import React from "react";
import { myImg } from "../../myInformation";

function PlaygroundTailwind() {
  return (
    <>
      <div className="text-2xl">Hello World</div>
      <div className="text sm">Hello World</div>
      <div className="text-red-700">Hello World</div>
      <div className="text-blue-300">Hello World</div>
      <div className="text-center">Hello World</div>
      <div className="font-bold">Hello World</div>
      <div
        className="text-2xl text-red-700 text-center
font-bold"
      >
        Hello World
      </div>

      <div className="bg-green-500 pt-6">pt-6</div>
      <div className="bg-blue-500 mr-6">mr-6</div>
      <div className="bg-blue-500 mt-8">mt-8</div>
      <div className="flex space-x-10">
        <div className="bg-red-400">01</div>
        <div className="bg-orange-400">02</div>
        <div className="bg-gray-400">03</div>
      </div>

      <div className="w-24 bg-red-700 text-white">Hello World</div>
      <div className="w-2/3 bg-red-400">Hello World</div>
      <div className="w-full bg-red-300">w-full</div>
      <div className="w-24 h-24 bg-red-200 rounded-lg">w-24 h-24</div>

      <div className="w-64 bg-gray-300 mt-[20px] border border-indigo-600">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-2 border-indigo-600">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-4 border-indigo-600">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-8 border-indigo-600">
        Hello World
      </div>

      <div className="w-64 bg-gray-300 mt-[20px] border-2 border-indigo-600 rounded-[20px]">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-2 border-indigo-600 rounded-md">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-2 border-indigo-600 rounded-lg">
        Hello World
      </div>
      <div className="w-64 bg-gray-300 mt-[20px] border-2 border-indigo-600 rounded-full">
        Hello World
      </div>

      <input class="border-2 border-rose-600 mt-[20px] rounded-[10px]"></input>

      <div class="border-solid border-2 border-indigo-600 w-[100px] h-[30px] mt-[20px]"></div>
      <div class="border-dashed border-2 border-indigo-600 w-[100px] h-[30px] mt-[20px]"></div>
      <div class="border-dotted border-2 border-indigo-600 w-[100px] h-[30px] mt-[20px]"></div>
      <div class="border-double border-4 border-indigo-600 w-[100px] h-[30px] mt-[20px]"></div>

      <button className="bg-sky-600 hover:bg-sky-700 mt-[20px] w-[250px] h-[40px] rounded-[20px] text-white w-[250px]">
        Save Change
      </button>
      <button
        class="bg-violet-500
hover:bg-violet-600 active:bg-violet-700
focus:outline-none focus:ring
focus:ring-violet-300 w-[250px] h-[40px] rounded-[20px] text-white"
      >
        Save changes
      </button>

      <h1 className="text-3xl font-bold underline text-red-700 mt-[20px]">
        Hello World!
      </h1>
      <div className="w-24 h-38 bg-blue-500">w-24</div>
      <div className="w-1/2 h-38 bg-yellow-300 rounded-lg">w-1/2</div>
      <button className="w-24 bg-green-200 hover:bg-green-800 hover:text-white">
        Button 1
      </button>
      <button className="w-36 bg-red-200 active:bg-red-500 focus:ring focus:outline-nonefocus:ring-red-800 ">
        Button 2
      </button>

      <div className="bg-gray-300 w-[300px] h-[400px] rounded-[20px] mt-[30px]">
        <div className="w-full ml-[50px] pt-[30px] ">
          <img className="w-[200px] h-[200px]" src={myImg.url}></img>
        </div>
        <div className="ml-[200px] pt-[40px] pb-[20px] space-x-6 ">
          <span className="pr-[40px] text-[20px]"> rabbitz </span>
          <span className="text-red-500">$0.01</span>
        </div>
        <div className="w-full ml-[100px]">
          <button className="w-[100px] h-[40px] bg-gray-600 text-white hover:bg-green-500 hover:text-white rounded-[10px]">
            buy now !
          </button>
        </div>
      </div>
    </>
  );
}

export default PlaygroundTailwind;
