import { useState } from "react";

const Navbar = () => {
  const [showHam, setShowHam] = useState(false);

  return (
    <nav className="w-full text-neutral-600 bg-white fixed z-20 top-0 left-0 border-b border-gray-50 shadow py-2 px-4">
      <div id="" className="navbar relative md:flex md:justify-between">
        <a className="flex items-center p-2" href="/">
          <img
            src="listen-logo.png"
            className="w-[30px] h-[30px]"
            alt="listen-logo"
          />
          <h4 className="font-montAlt text-xl font-semibold tracking-[-0.15em] ml-2">
            My Resume
          </h4>
        </a>
        <button
          onClick={() => setShowHam(!showHam)}
          type="button"
          className="absolute float-right top-0 right-0 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div className={"mt-4 md:mt-0 " + (showHam ? "block" : "hidden md:flex")} id="navbar-list">
          <ul className="flex flex-col md:flex-row">
            
            <li className="flex justify-center hover:bg-gray-50 p-2 md:p-0 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <a className="flex items-center px-2" href="/">
                <img
                  src="tailwind-css-icon.svg"
                  className="w-[20px] h-[20px] mr-1"
                  alt="tailwind-css-icon"
                />
                <p>Resume1</p>
              </a>
            </li>

            <li className="flex justify-center hover:bg-gray-50 p-2 md:p-0 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <a className="flex items-center px-2" href="/resume2">
                <img
                  src="css-icon.png"
                  className="w-[20px] h-[20px] mr-1"
                  alt="css-icon"
                />
                <p>Resume2</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;