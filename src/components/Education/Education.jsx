import React from "react";
import { education, profileImg } from "../../resumeInfo";

function Education() {
  return (
    <div>
      <div className="flex items-center mt-4 ml-5 ">
        <div>
          <img src={profileImg.icon3} />
        </div>
        <div className="ml-4">
          <h1 className="text-xl">Education</h1>
        </div>
      </div>
      <div className="ml-20">
        <h2 className="text-base">MFU</h2>
        <p className="text-sm">{education.degree}</p>
        <p className="text-sm">Major: {education.major}</p>
      </div>
    </div>
  );
}

export default Education;
