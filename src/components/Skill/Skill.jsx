import React from "react";
import { skills } from "../../resumeInfo";
import "./Skill.css";

function Skill() {
  return (
    <>
      <div
        id="bg-skill"
        className="px-4 py-3 mt-4 rounded-[20px] drop-shadow-lg md:mt-9 lg:mt-[120px] lg:w-2/4 lg:m-auto xl:w-4/5"
      >
        <h1 className="mt-2 text-2xl text-white text-center mb-4 md:text-3xl ">
          SKILLS
        </h1>
        <div className="ml-6 flex items-start md:justify-center">
          <div>
            <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
              Frontend
            </p>
            <div className="flex flex-col">
              {skills.frontend.map((fe) => (
                <span className="ml-8 text-white md:text-xl">{fe}</span>
              ))}
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-xs text-center mr-8 md:text-2xl md:px-2">
                Version Control System
              </p>
              <p className="ml-8 text-white md:text-2xl">git</p>
            </div>
          </div>
          <div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
                Backend
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.Backend.skill1}
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.Backend.skill2}
              </p>
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-xs  text-center mr-8 md:text-2xl md:px-2">
                Language & Technology
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.language.skill1}
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.language.skill2}
              </p>
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
                Tools
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.tools.skill1}
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.tools.skill2}
              </p>
              <p className="ml-8 text-white md:text-2xl">
                {skills.tools.skill3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
