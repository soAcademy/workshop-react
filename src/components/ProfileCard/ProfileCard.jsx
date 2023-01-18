import React from "react";
import { profileImg, myInformation } from "../../resumeInfo.js";
import { GoCode } from "react-icons/go";

function ProfileCard() {
  return (
    <>
      <div id="backhome" className="flex relative mt-6">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden absolute z-10 border-4 border-sky-500 top-[20px] left-[10px] md:w-[200px] md:h-[200px] md:top-[19px] md:left-[25px] lg:left-[150px]">
          <img className="w-full h-full object-cover" src={profileImg.url} />
        </div>
        <div className="bg-gray-300 w-full py-4 px-4 rounded-[20px] drop-shadow-xl flex md:p-10">
          <div className="w-2/6"></div>
          <div className="w-4/6 pl-3 lg:pl-15">
            <div className="">
              <h1 className="text-base md:text-2xl lg:text-4xl">
                {myInformation.name}
              </h1>
              <h2 className="text-base md:text-2xl lg:text-4xl">
                {myInformation.position}
              </h2>
            </div>
            <div>
              <h4 className="text-base text-gray-50 mt-4 md:text-xl lg:text-2xl">
                napatpimon.pon@gmail.com
              </h4>
              <ul className="flex -translate-x-3">
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://www.instagram.com/bingbing_cat636/"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://github.com/khunboeing"
                  >
                    <img src="https://img.icons8.com/glyph-neue/64/000000/github.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://www.linkedin.com/in/napatpimon-ponpathanapaisarn-162420243/"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://boeingportfirst.vercel.app/"
                  >
                    <GoCode />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
