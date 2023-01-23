import React from "react";

function Hamburger() {
  return (
    <div className="fixed right-0 top-0 bottom-0 bg-gray-800 px-7 z-50 border-l-2 border-white md:px-[50px] lg:px-[200px]">
      <h2 className="text-white w-fit text-xl p-2 mt-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 rounded-[10px] md:text-4xl md:px-6">
        MENU
      </h2>
      <a href="#">
        <h1 className="text-white p-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[10px] mt-[30px] md:text-3xl">
          My CV Click
        </h1>
      </a>
      <a href="#">
        <h1 className="text-white p-2 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[10px] mt-[30px] md:text-3xl">
          My Portfolio
        </h1>
      </a>
    </div>
  );
}

export default Hamburger;
