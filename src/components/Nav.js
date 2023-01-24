import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
// import Button from "./Button";
import logoWeb from "./logo4.jpg";

export const Nav = () => {
  let Links = [
    { name: "HOME", link: "https://sprinttech-first-resume.web.app/" },
    { name: "ABOUT", link: "/" },
    { name: "PORTFOLIO & CERTIFICATE", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-lg w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 px-7 md:px-7 ">
        <div className="cursor-pointer flex items-center">
          <a
            href="https://sprinttech-first-resume.web.app/"
            class="flex items-center"
          >
            <span className="mr-3 pt-2">
              <img
                src={logoWeb}
                alt="web logo"
                className="w-[50px] rounded-full"
              />
            </span>
          </a>
          <div className="font-bold text-xl font-[Poppins] text-gray-800 mt-1">
            First
          </div>
          <div className="font-normal text-lg font-[Poppins] text-gray-800 mt-1 ml-1">
            Weeraphat
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:justify-end md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-xl text-center md:ml-8 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Nav2 = () => {
  const Links = [
    { name: "HOME", link: "https://sprinttech-first-resume.web.app/" },
    { name: "ABOUT", link: "#about" },
    { name: "PORTFOLIO & CERTIFICATE", link: "#port" },
    { name: "CONTACT", link: "/" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className="shadow-lg w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 px-7 md:px-7 ">
        <div className="cursor-pointer flex items-center">
          <a
            href="https://sprinttech-first-resume.web.app/"
            class="flex items-center"
          >
            <span className="mr-3 pt-2">
              <img
                src={logoWeb}
                alt="web logo"
                className="w-[50px] rounded-full"
              />
            </span>
          </a>
          <div className="font-bold text-xl font-[Poppins] text-gray-800 mt-1">
            First
          </div>
          <div className="font-normal text-lg font-[Poppins] text-gray-800 mt-1 ml-1">
            Weeraphat
          </div>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
        >
          { /*<FaBars name={toggle ? "close" : "menu"}/>*/ }
          { toggle ?<FaTimes /> : <FaBars /> }
        </div>
        <ul
          className={`md:flex md:items-center md:justify-end md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            toggle ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-xl text-center md:ml-8 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
