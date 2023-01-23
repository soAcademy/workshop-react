import React from "react";
import { education, profileImg } from "../../resumeInfo";

function Education() {
  return (
    <div className="lg:w-2/4 lg:m-auto lg:mt-[100px]">
      <div className="flex items-center mt-4 ml-5">
        <div>
          <img src={profileImg.icon3} />
        </div>
        <div className="ml-4">
          <h1 className="text-xl text-white border border-sky-500 p-3 rounded-[20px] mb-[10px] md:text-3xl">
            Education
          </h1>
        </div>
      </div>
      <div className="ml-20">
        <h2 className="text-base text-white md:text-2xl">MFU</h2>
        <p className="text-sm text-white md:text-xl">{education.degree}</p>
        <p className="text-sm text-sky-500 md:text-xl">
          Major: {education.major}
        </p>
      </div>
    </div>
  );
}

export default Education;
