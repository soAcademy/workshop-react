import { workExperience } from "../../ResumeInfo/ResumeInfo.js";

const WorkExperience = () => (
  <div className="h-5/12 md:px-2" id='workExperience'>
    <p className="my-4 pb-2 font-bold md:text-xl">WORK EXPERIENCE</p>
    {workExperience.map((e) => (
      <div className="py-2 flex ">
        <div className="w-1/3 py-4">
          <div className=" relative -top-[24px]">
            <p className="font-semibold text-sm md:text-base">{e.company}</p>
            <p className="relative top-2 text-xs md:text-base">{e.year}</p>
          </div>
        </div>
        <div className="w-2/3 pl-4 border-l">
          <ol className="pl-4 relative -top-[9px] -left-[17px] text-sm md:text-base">
            <li className="font-semibold list-disc ">{e.role}</li>
            <li className="relative top-2 ">{e.jobDesc}</li>
          </ol>
        </div>
      </div>
    ))}
  </div>
);

export default WorkExperience;
