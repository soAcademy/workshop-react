import {
  PersonalInfo,
  EduAndExpInfo,
  CertInfo1,
  CertInfo2,
  CertInfo3,
  Skills,
} from "./components/DataInfo.js";

import { Nav, Nav2 } from "./components/Nav";

const Resume = () => {
  return (
    <>
      <Nav2 />
      <div className="mt-12 pt-12">
        <PersonalInfo />
          <EduAndExpInfo />
        <div>
          <p className="text-2xl text-black font-semibold underline underline-offset-4 ml-2 my-5 ">
            Portfolio & Certificate
          </p>
          <div
            id="port"
            className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-3"
          >
            {/* <CertInfo1 /> */}
            {/* <CertInfo2 /> */}
            <CertInfo3 />
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default Resume;
