import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";

const Resume = ({ firstName, lastName, profileImage, contactInfo }) => (
  <>
    <div className="grid gap-0 grid-cols-1 md:grid-cols-3">
      <div className="bg-indigo-500 p-4 md:order-1 text-center flex justify-center">
        <img src={profileImage} className="w-2/3 rounded-full" alt="Profile" />
      </div>
      <div className="md:col-span-2 p-4 md:order-2">
        <h1 className="text-2xl">
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
      <div className="md:bg-indigo-500 p-4 md:order-3">
        <h2 className="text-xl">About Me</h2>
      </div>
      <div className="md:col-span-2 p-4 md:order-4">
        <h1 className="text-2xl">Details</h1>
      </div>
    </div>
  </>
);

export default Resume;
