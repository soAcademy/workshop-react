import TailwindExample from "./App2.js";
import Product from "./Product.js";
import Resume from "./Resume.js";
import Shop from "./Shop.js";
import string from "./Tiworkshop.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./Aboutme.js";
import Work from "./Work.js";
import Education from "./Education.js";
import Hobbies from "./Hobbies.js";
import Contact from "./Contact.js";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const resumeInfo = {
  summary: "Personal Summary",
  summaryinfo:
    " A well-rounded and highly motivated Aeronautics & Astronautics graduate with strong technical and interpersonal skills. These are demonstrated through the independent research and computational simulations performed for the Individual Project, as well as the role of a structural engineer in a fixed- wing UAV design project.",
  language: "Language Skills",
  eng: "English",
  thai: "Thai",
  website: "Website & Social Links",
  facebook: "Facebook: Teak Yuktanand",
  instagram: "Instagram: teak_anawil",
  line: "Line: teak88",
  name: (
    <>
      Anawil
      <br />
      Yuktanand
    </>
  ),
  location: "Location: Bangkok, Thailand",
  tel: "0835989444",
  email: "teak.yuktanand@gmail.com",
  titleright1: " Work Experience and Volunteering",
  hope: " Hope for Children",
  ivhq: "IVHQ",
  school: "Ban Na Rab School",
  hopeinfo:
    "Raised 291.19 pounds for a non-profit organisation Hope for Children",
  hopeinfo2:
    " Developed self-confidence and strong communication skills conveying messages to crowds of people",
  ivhqinfo: "Volunteer in a construction project in Livingstone, Zambia",
  ivhqinfo2:
    " Working alongside a skilled local foreman and other volunteers to build a library for a primary school",
  schoolinfo:
    "Teaching English at Ban Na Rap Primary School in Nan Province, Thailand for 1 month",
  schoolinfo2:
    " Help planning lessons, organising academic activities and accompanying a group of students on a school trip",
  education: "Education",
  uni: "University",
  unidate: "October 2019 - June 2022",
  unicourse: "BEng Aeronautics & Astronautics",
  highschool: "school",
  highschooldate: "August 2012 - June 2018",
  unidetail:
    " Modules involved: Individual Project, Materials and Structures, Aerothermodynamics, Applications of CFD, Propulsion, Aerodynamics, Aircraft Structural Design, Aerospace Control Systems, Introduction to Aircraft Design, Experimental Methods for Aerodynamics, Mathematics for Engineering and the Environment, Systems Design and Computing, Engineering Management & Law",
  highschooldetail:
    "4 International A-Level Qualifications including Physics , Mathematics , Further Mathematics, Chemistry",
  highschooldetail2: "IELTS Academic Overall Score 7.5",
  highschooldetail3: "9 International IGCSEs Qualifications",
  hobbies: "Hobbies",
  music: "Music",
  traveling: "Traveling",
  reading: "Reading",
};
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="w-full fixed ml-1 top-0">
          <nav className="bg-teal-300 shadow-lg md:flex md:items-center md:justify-between p-2 rounded-lg mr-3 md:mr-6">
            <div>
              <button
                className="text-xl cursor-pointer justify-right md:hidden"
                onClick={() => setToggle(!toggle)}
              >
                <GiHamburgerMenu />
              </button>
              {toggle && (
                <div>
                  <div>
                    <Link
                      to="resume/main"
                      className="text-base font-bold text-sky-700 hover:bg-sky-100"
                    >
                      About Me
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="resume/work"
                      className="text-base font-bold text-sky-700 hover:bg-sky-100"
                    >
                      Work Experience
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="resume/education"
                      className="text-base font-bold text-sky-700 hover:bg-sky-100"
                    >
                      Education
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="resume/hobbies"
                      className="text-base font-bold text-sky-700 hover:bg-sky-100"
                    >
                      Hobbies
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="resume/contact"
                      className="text-base font-bold text-sky-700 hover:bg-sky-100"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div>
              <ul className=" md:flex md:items-center">
                <li>
                  <Link
                    to="resume/main"
                    className="text-base font-bold text-sky-700 hover:text-sky-100 md:mx-6 hidden md:block"
                  >
                    About Me
                  </Link>
                </li>

                <li>
                  <Link
                    to="resume/work"
                    className="text-base text-sky-700 hover:text-sky-100 md:mx-6 font-bold hidden md:block "
                  >
                    Work Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="resume/education"
                    className="text-base text-sky-700 hover:text-sky-100 md:mx-6 font-bold hidden md:block "
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="resume/hobbies"
                    className="text-base text-sky-700 hover:text-sky-100 md:mx-6 font-bold md:show hidden md:block"
                  >
                    Hobbies
                  </Link>
                </li>
                <li>
                  <Link
                    to="resume/contact"
                    className="text-base text-sky-700 hover:text-sky-100 md:mx-6 font-bold hidden md:block"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="" element={<Resume info={resumeInfo} />} />
          <Route exact path="resume">
            <Route exact path="main" element={<Resume info={resumeInfo} />} />
            <Route exact path="work" element={<Work />} />
            <Route exact path="education" element={<Education />} />
            <Route exact path="hobbies" element={<Hobbies />} />
            <Route exact path="contact" element={<Contact />} />
          </Route>
          <Route exact path="*" element={<>404 Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
