import React from "react";

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
    </>
  );
}

export default PlaygroundTailwind;
