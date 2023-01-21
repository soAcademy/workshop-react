import { useState } from "react"; // import state
import './Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    // <div className="h-10 md:h-12 text-white w-full">
    //   <div className="flex h-10 md:h-12 w-full justify-between fixed z-50 bg-black shadow-lg">
    //     <button className="h-10 md:h-full ml-2 fixed md:relative z-50">
    //       <img
    //         src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"
    //         className="h-10 md:h-full p-2 md:p-3"
    //         alt=""
    //       ></img>
    //     </button>
    //     <div className="pr-4 flex justify-between items-center text-lg">
    //       <button className="rounded-md invisible md:visible hover:text-xl w-20">
    //         HOME
    //       </button>
    //       <a
    //         href="https://github.com/jaiieth"
    //         target="_blank"
    //         alt=""
    //         rel="noreferrer"
    //       >
    //         <button className="rounded-md invisible md:visible hover:text-xl w-24 ">
    //           GITHUB
    //         </button>
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/varis-anekboontaweechoke-664600218/"
    //         target="_blank"
    //         alt=""
    //         rel="noreferrer"
    //       >
    //         <button className="rounded-md invisible md:visible hover:text-xl w-28">
    //           LINKED-IN
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="h-10 text-white w-full">
      <div className="flex items-center justify-between border-b border-gray-400 pl-3 bg-black h-10 w-full fixed z-50">
        <nav>
          <section className="MOBILE-MENU flex md:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 cursor-pointer rounded-xl my-2 mx-2 "
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-evenly min-h-[250px]">
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#aboutMe">About me</a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#workExperience">work experience</a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a
                    href="https://www.linkedin.com/in/varis-anekboontaweechoke-664600218/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linked-in
                  </a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#https://github.com/jaiieth">github</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 md:flex text-white absolute right-10 top-2">
            <li>
              <a
                href="https://www.linkedin.com/in/varis-anekboontaweechoke-664600218/"
                target="_blank"
                rel='noreferrer'
              >
                LINKED-IN
              </a>
            </li>
            <li>
              <a href="#https://github.com/jaiieth">GITHUB</a>
            </li>
          </ul>
        </nav>
        <style></style>
      </div>
    </div>
  );
};

export default Navbar;
