import React from "react";
import { profileImg, myInformation } from "../../resumeInfo.js";
import { GoCode } from "react-icons/go";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <>
      <div className="flex relative mt-6">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden absolute z-10 border-[6px] border-sky-500 top-[-10px] left-[-10px] md:w-[240px] md:h-[240px] md:top-[15px] md:left-[50px] lg:left-[150px] lg:top-[30px] lg:w-[300px] lg:h-[300px] 2xl:left-[150px]">
          <img className="w-full h-full object-cover" src={profileImg.url} />
        </div>
        <div
          id="p-container"
          className="w-full py-4 px-4 rounded-[20px] border border-sky-500 mb-4 mt-3 drop-shadow-xl flex md:p-10 md:w-3/4 md:m-auto md:mt-9 lg:mt-20 lg:w-[900px] lg:h-[200px]"
        >
          <div className="w-2/6"></div>
          <div className="w-4/6 pl-11  ">
            <div className="">
              <h1 className="text-xl text-white md:text-4xl lg:text-5xl">
                {myInformation.name}
              </h1>
              <h2 className="text-base text-sky-300 md:text-3xl lg:text-4xl md:mt-2">
                {myInformation.position}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
