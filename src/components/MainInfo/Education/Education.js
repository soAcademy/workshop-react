import { education } from '../../ResumeInfo/ResumeInfo';

const Education = () => (
  <div className="h-5/12 md:px-0" id='education'>
    <p className="px-1 my-2 py-2 font-bold md:text-xl border-t">EDUCATION</p>
    {education.map((e) => (
      <div className="py-2 flex">
        <div className="w-1/3 py-4">
          <div className=" relative -top-[24px] text-sm md:text-base">
            <p className="font-semibold px-1">{e.school}</p>
            <p className="relative top-2 px-1">{e.year}</p>
          </div>
        </div>
        <div className="w-2/3 pl-4 border-l">
          <ol className="pl-4 relative -top-[9px] -left-[17px] text-sm md:text-base">
            <li className="font-semibold list-disc">{e.degree}</li>
            <li className="relative top-2">{e.program}</li>
          </ol>
        </div>
      </div>
    ))}
  </div>
);

export default Education;