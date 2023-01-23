import React from "react";
import "./NavComponent.css";
import { profileImg } from "../../resumeInfo";

function NavComponent(props) {
  const { openHamburger } = props;
  return (
    <>
      <div
        id="nav"
        className="w-[100%] h-[70px] flex justify-between items-center px-6 pt-8 pb-8 sticky top-0 z-20 md:h-[90px] lg:px-20 lg:h-[120px] "
      >
        <a href="#backhome">
          <img
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] lg:ml-[90px] "
            src={profileImg.icon2}
          />
        </a>

        <div className="md:pr-8 lg:mr-[90px]" onClick={() => openHamburger()}>
          <img className="w-[50px] h-[50px]" src={profileImg.icon1} />
        </div>
      </div>
    </>
  );
}

export default NavComponent;
