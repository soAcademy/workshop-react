import React from "react";
import { projects } from "../../resumeInfo";
import "./ProjectContainer.css";

function ProjectContainer() {
  return (
    <>
      <div
        id="pj"
        className="mt-4 mx-2 px-4 py-3 rounded-[20px] drop-shadow-lg lg:mt-[100px] lg:w-2/4 lg:m-auto xl:w-4/5"
      >
        <h1 className="text-xl bg-sky-500 w-fit p-2 rounded-[10px] border border-white md:text-3xl">
          PROJECTS
        </h1>
        {projects.map((pj) => (
          <div>
            <h2 className="mt-3 text-white md:text-xl">
              Project Name : {pj.name}
            </h2>
            <p className="text-gray-400 mb-1 ml-2 text-xs md:text-sm">
              {pj.describe}
            </p>
            <a
              className="text-gray-400 text-xs ml-2 bg-black p-0.5 rounded-[5px] md:text-lg"
              href="https://bit.ly/boeingportfolio"
            >
              click
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectContainer;
