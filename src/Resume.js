import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import Experience from "./Experience";

const Resume = ({
  firstName,
  lastName,
  profileImage,
  contactInfo,
  aboutInfo,
  workExpList,
  eduExpList,
}) => (
  <main className="font-jost hyphens-manual">
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex justify-center bg-indigo-500 p-4 text-center md:order-1">
        <img src={profileImage} className="w-2/3 rounded-full" alt="Profile" />
      </div>
      <div className="p-4 md:order-2 md:col-span-2 lg:col-span-3">
        <header className="mb-8 flex items-center md:mb-11">
          <h1 className="pb-px text-2xl font-semibold text-gray-750">
            {firstName} {lastName}
          </h1>
        </header>
        <ul className="text-md leading-normal text-gray-700">
          <li>
            <FaMapMarkerAlt className="inline" /> {contactInfo.location}
          </li>
          <li>
            <FaPhone className="inline" /> {contactInfo.tel}
          </li>
          <li>
            <FaRegEnvelope className="inline" /> {contactInfo.email}
          </li>
        </ul>
      </div>
      <div className="p-4 md:order-3 md:bg-indigo-500">
        <h2 className="mb-4 text-sm2 font-bold tracking-widest text-gray-550 print:font-normal md:text-gray-900">
          About Me
        </h2>
        <p className="text-md leading-normal text-gray-700 md:text-gray-800">
          {aboutInfo}
        </p>
      </div>
      <div className="p-4 md:order-4 md:col-span-2 lg:col-span-3">
        <Experience headingText="Work Experience" expList={workExpList} />
        <Experience headingText="Education" expList={eduExpList} />
      </div>
    </div>
  </main>
);

export default Resume;
