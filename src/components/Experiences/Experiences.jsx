import React from "react";
import { experience } from "../../resumeInfo";
import "./Experiences.css";

function Experiences() {
  return (
    <>
      <div id="exp" className="mx-3 my-4 rounded-[20px] drop-shadow-lg pb-3">
        <h1 className="underline pl-4 pt-3 text-lg">EXPERIENCES</h1>
        {experience.map((exp) => (
          <div className="px-4">
            <h1 className="mt-3">🔹 {exp.job}</h1>
            <p> - {exp.place}</p>
            <p className="mb-4 ml-2 text-white text-xs">{exp.jobDescription}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experiences;
