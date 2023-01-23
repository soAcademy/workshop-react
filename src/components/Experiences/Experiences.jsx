import React from "react";
import { experience } from "../../resumeInfo";
import "./Experiences.css";

function Experiences() {
  return (
    <>
      <div
        id="exp"
        className="mx-3 my-4 rounded-[20px] drop-shadow-lg pb-3 pt-4 lg:w-2/4 lg:m-auto lg:my-[100px] xl:w-4/5"
      >
        <h1 className=" p-3 ml-4 pt-3 text-lg  bg-sky-500 w-fit rounded-[10px] border border-white md:text-3xl ">
          EXPERIENCES
        </h1>
        {experience.map((exp) => (
          <div className="px-4">
            <h1 className="mt-3 text-sky-500 md:text-lg">🔹 {exp.job}</h1>
            <p className="text-sky-300"> - {exp.place}</p>
            <p className="mb-4 ml-2 text-gray-400 text-xs">
              {exp.jobDescription}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experiences;
