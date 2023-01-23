import "./index.css";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Resume = ({ props }) => {
  return (
    <>
      {/* START NAV SECTION */}
      <nav className="w-full fixed">
        <div className="h-16 bg-gradient-to-r from-green-400 to-blue-500 md:w-5/6 shadow-md mx-auto rounded-b-xl"></div>
      </nav>
      {/* END NAV SECTION */}

      {/*MAIN CONTAINER*/}
      <div className="md:flex md:w-5/6 mx-auto pt-14 border-b-2 border-gray-100">
        {/* LEFT SECTION */}
        <div className="w-full pb-10 text-gray-100 md:w-1/2 lg:w-1/3 bg-black p-3">
          {/* START IMAGE */}
          <div className="mt-5 p-5">
            <div className="mx-5 sm:mx-20 p-3 md:m-5 md:p-2 xl:p-3  bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg">
              <img className="rounded-full shadow-lg" src={props.image} />
            </div>
          </div>

          {/* END IMAGE */}
          {/* START NAME */}
          <div className="px-2 pb-10 font-bold text-4xl sm:text-5xl text-center md:text-4xl xl:text-5xl w-full">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{`${props.fname} ${props.lname}`}</div>
          </div>
          {/* END NAME */}
          {/* START stack */}
          {/* <div className="">
            <div className="px-20 md:px-10">
              <img src="./mern.png" />
            </div>
          </div> */}

          {/* END stack */}

          {/* START ABOUT ME */}
          <div className="p-6 border-b-2 border-b-gray-100">
            <h2 className="text-2xl font-bold">ABOUT ME</h2>
            <p className="text-md">{props.aboutMe}</p>
          </div>
          {/* END ABOUT ME */}

          {/* START WEBSITE */}
          <div className="p-6 border-b-2 border-b-gray-100">
            <h2 className="mb-3 text-2xl font-bold">MY PAGE</h2>
            <h3 className="font-bold">GitHub:</h3>
            <a className="hover:text-green-400" href={props.site1}>
              Visit My Facebook
            </a>
            <h3 className="font-bold">Facebook:</h3>
            <a className="hover:text-green-400" href={props.site2}>
              Visit My Facebook
            </a>
            <h3 className="font-bold">Instagram:</h3>
            <a className="hover:text-green-400" href={props.site3}>
              Visit My Facebook
            </a>
          </div>
          {/* END WEBSITE */}

          {/* START POWER BAR SECTION*/}
          <div className="p-6 text-gray-100 border-b-2 border-gray-100 md:border-hidden">
            <div>
              <h2 className="text-2xl font-bold">MY LANGUAGE</h2>
            </div>
            {/* SKILL 1 */}
            <div className="py-1">
              {/* SKILL 1 NAME */}
              <div className=" text-lg font-bold py-3">
                <h1>THAI</h1>
              </div>
              {/* SKILL 1 BAR */}
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-lg"
                  style={{ width: `80%` }}
                ></div>
              </div>
            </div>
            {/* END SKILL 1*/}
            {/* SKILL 2 */}
            <div className="py-1">
              {/* SKILL 2 NAME */}
              <div className=" text-lg font-bold py-3">
                <h1>ENGLISH</h1>
              </div>
              {/* SKILL 2 BAR */}
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-lg"
                  style={{ width: `60%` }}
                ></div>
              </div>
            </div>
            {/* END SKILL 2*/}
            {/* SKILL 3 */}
            <div className="py-1">
              {/* SKILL 3 NAME */}
              <div className=" text-lg font-bold py-3">
                <h1>KOREAN</h1>
              </div>
              {/* SKILL 3 BAR */}
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-lg"
                  style={{ width: `30%` }}
                ></div>
              </div>
            </div>
            {/* END SKILL 3*/}
          </div>
          {/* EBD POWER BAR SECTION */}
        </div>
        {/* END LEFT SECTION */}

        {/* RIGHT SECTION */}
        <div className="right-section p-3 bg-black text-gray-100 w-full md:w-1/2 lg:w-2/3">
          <div className="education px-6 pb-6 md:pt-14 border-b-2 border-gray-100">
            <div className="education-head">
              <h3 className="pb-6 text-2xl font-bold">EDUCATION</h3>
            </div>
            <div className="education-detail lg:flex pb-3">
              <div className="w-full lg:w-1/3 pb-3">
                <h4 className="font-bold">School</h4>
              </div>
              <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right"></div>
              <div className="w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className="font-bold">{props.school} </h4>
                <p>{props.schoolDetail}</p>
              </div>
            </div>
            <div className="education-detail lg:flex pb-3">
              <div className="w-full lg:w-1/3 pb-3">
                <h4 className="font-bold">University</h4>
              </div>
              <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right"></div>
              <div className="w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className="font-bold"> {props.university1}</h4>
                <p>{props.universityDetail1}</p>
              </div>
            </div>
            <div className="education-detail lg:flex pb-3">
              <div className="w-full lg:w-1/3 pb-3">
                <h4 className="hidden font-bold">University</h4>
              </div>
              <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right"></div>
              <div className="w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className="font-bold"> {props.university2}</h4>
                <p>{props.universityDetail2}</p>
              </div>
            </div>
          </div>
          <div className="work-exp p-6">
            <div className="w-full">
              <h3 className="pb-6 text-2xl font-bold">
                WORK EXPERIENCE
              </h3>
            </div>
            <div className="company-detail lg:flex  justify-between">
              <div className="company w-full lg:w-1/3 lg:border-r-2">
                <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right -mr-1.5"></div>
                <time className="font-bold">2016-2017</time>
              </div>
              <div className="details w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className=" font-bold">
                  International Project Administration Co.,Ltd
                </h4>
                <ul class="list-none">
                  <li>- Site Engineer</li>
                  <li>- Construction Progress Tracker & Report</li>
                  <li>- Construction Manager Assistant</li>
                </ul>
                <br />
              </div>
            </div>
            <div className="company-detail lg:flex  justify-between">
              <div className="company w-full lg:w-1/3 lg:border-r-2">
                <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right -mr-1.5"></div>
                <time className="font-bold">2018-2019</time>
              </div>
              <div className="details w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className=" font-bold">Power Line Engineering Co.,Pcl</h4>
                <ul class="list-none">
                  <li>- Technical Support for Site Engineer</li>
                  <li>- Construction Layout Planer</li>
                  <li>- Construction Man power & Machinery Planer</li>
                </ul>
                <br />
              </div>
            </div>
            <div className="company-detail lg:flex  justify-between">
              <div className="company w-full lg:w-1/3 lg:border-r-2">
                <div className="hidden lg:flex md:bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 rounded-full w-3 h-3 float-right -mr-1.5"></div>
                <time className="font-bold">2020-2022</time>
              </div>
              <div className="details w-full lg:w-2/3 border-l-2 border-green-400 pl-3 lg:border-l-0">
                <h4 className=" font-bold">TEAM Group Co.,Pcl</h4>
                <p className="">
                  <ul class="list-none">
                    <li>- Cost & Specification Engineer</li>
                    <li>- Architecture & Structure Drawing Improvement</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT SECTION */}
      </div>
      {/* END MAIN CONTAIN */}

      {/* START CONTACT INFO */}
      <div>
        <div className="grid grid-rows-1 grid-flow-col gap-4 place-items-center md:w-5/6 mx-auto p-6 text-md sm:text-xl bg-black text-gray-100 ">
          <div className="">
            <h4 className="flex text-center font-bold">
              <GoLocation className="mt-1 mr-1" /> Location :{" "}
            </h4>
            <p>{props.location}</p>
          </div>

          <div>
            <h4 className="flex text-center font-bold">
              <BiPhoneCall className="mt-1 mr-1" />
              Contact :{" "}
            </h4>
            <p>{props.contactInfo}</p>
          </div>

          <div>
            <h4 className="flex text-center font-bold">
              <AiOutlineSafetyCertificate className="mt-1 mr-1" />
              Qualifications :
            </h4>
            <p>{props.qualify}</p>
          </div>
        </div>
      </div>

      {/* END CONTACT INFO */}
    </>
  );
};

export default Resume;

{
  /* //ตัวอย่าง time line
          <div className="try1">
          <ol class="relative border-l border-gray-800 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &amp;
                Marketing pages.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div> */
}
