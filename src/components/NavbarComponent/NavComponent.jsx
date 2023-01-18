import React from "react";
import "./NavComponent.css";

function NavComponent() {
  return (
    <>
      <div
        id="nav"
        className="w-[100%] h-[100px] flex justify-center pt-8 pb-8 md:w-"
      >
        <span id="logo" className="text-2xl text-white"></span>
      </div>
    </>
  );
}

export default NavComponent;
