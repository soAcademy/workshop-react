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
  <>
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex justify-center bg-indigo-500 p-4 text-center md:order-1">
        <img src={profileImage} className="w-2/3 rounded-full" alt="Profile" />
      </div>
      <div className="p-4 md:order-2 md:col-span-2 lg:col-span-3">
        <h1 className="font-display text-2xl">
          {firstName} {lastName}
        </h1>
        <ul>
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
        <h2 className="font-display text-xl">About Me</h2>
        <p>{aboutInfo}</p>
      </div>
      <div className="p-4 md:order-4 md:col-span-2 lg:col-span-3">
        <Experience headingText="Work Experience" expList={workExpList} />
        <Experience headingText="Education" expList={eduExpList} />
      </div>
    </div>
  </>
);

export default Resume;
