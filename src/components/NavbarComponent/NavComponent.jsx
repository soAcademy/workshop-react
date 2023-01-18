import React from "react";
import "./NavComponent.css";
import { profileImg } from "../../resumeInfo";

function NavComponent() {
  return (
    <>
      <div
        id="nav"
        className="w-[100%] h-[70px] flex justify-between items-center px-6 pt-8 pb-8 sticky top-0 z-20 lg:px-20"
      >
        <a href="#backhome">
          <img className="w-[40px] h-[40px]" src={profileImg.icon2} />
        </a>
        <a href="#ft">
          <img className="w-[50px] h-[50px]" src={profileImg.icon1} />
        </a>
      </div>
    </>
  );
}

export default NavComponent;
