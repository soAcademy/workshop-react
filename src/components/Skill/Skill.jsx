import React from "react";
import { skills } from "../../resumeInfo";

function Skill() {
  return (
    <>
      <div className="bg-gray-200 px-4 py-3 mt-4 rounded-[20px] drop-shadow-lg">
        <h1 className="mt-2 text-lg underline text-center mb-4 md:text-2xl ">
          SKILLS
        </h1>
        <div className="ml-6 flex items-start md:justify-center">
          <div>
            <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
              Frontend
            </p>
            <div className="flex flex-col">
              {skills.frontend.map((fe) => (
                <span className="ml-8 md:text-xl">{fe}</span>
              ))}
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-xs text-center mr-8 md:text-2xl md:px-2">
                Version Control System
              </p>
              <p className="ml-8 md:text-2xl">git</p>
            </div>
          </div>
          <div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
                Backend
              </p>
              <p className="ml-8 md:text-2xl">{skills.Backend.skill1}</p>
              <p className="ml-8 md:text-2xl">{skills.Backend.skill2}</p>
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-xs  text-center mr-8 md:text-2xl md:px-2">
                Language & Technology
              </p>
              <p className="ml-8 md:text-2xl">{skills.language.skill1}</p>
              <p className="ml-8 md:text-2xl">{skills.language.skill2}</p>
            </div>
            <div>
              <p className="border border-sky-500 text-white bg-sky-500 rounded-[20px] text-sm text-center mr-8 md:text-2xl">
                Tools
              </p>
              <p className="ml-8 md:text-2xl">{skills.tools.skill1}</p>
              <p className="ml-8 md:text-2xl">{skills.tools.skill2}</p>
              <p className="ml-8 md:text-2xl">{skills.tools.skill3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
