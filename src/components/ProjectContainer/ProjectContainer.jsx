import React from "react";
import { projects } from "../../resumeInfo";
import "./ProjectContainer.css";

function ProjectContainer() {
  return (
    <>
      <div
        id="pj"
        className="mt-4 mx-2 px-4 py-3 rounded-[20px] drop-shadow-lg"
      >
        <h1 className="underline text-xl">PROJECTS</h1>
        {projects.map((pj) => (
          <div>
            <h2 className="mt-3">Project Name : {pj.name}</h2>
            <p className="text-gray-600 mb-1 ml-2 text-xs">{pj.describe}</p>
            <a
              className="text-sky-200 ml-2"
              href="https://bit.ly/boeingportfolio"
            >
              {pj.link}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectContainer;
