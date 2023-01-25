import { useEffect, useState } from "react"; // import state
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [navClass, setNavClass] = useState();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setNavClass(
      `absolute w-1/2 h-screen top-8 -left-[51%] bg-black text-white transition duration-500 shadow-xl shadow-gray-900 ${
        isNavOpen ? "opacity-90 translate-x-full" : ""
      }`
    );
  }, [isNavOpen]);

  return (
    <div className="h-10 text-white w-full sticky top-0 z-20 ">
      <div className="flex items-center justify-between border-b border-gray-400 pl-3 bg-black h-10 md:h-14 w-full fixed z-50 ">
        <nav>
          <section className="MOBILE-MENU flex md:hidden">
            <div
              className={`HAMBURGER-ICON space-y-2 cursor-pointer z-20 p-[6px] hover:bg-gray-700  ${
                isNavOpen
                  ? `bg-gray-800 shadow-[inset_0_0_5px_rgba(0,0,0,1)]`
                  : "bg-gray-800"
              } rounded-md duration-300`}
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>

            <div className={navClass} id="hamburg">
              <div
                className="CROSS-ICON absolute top-0 right-2 cursor-pointer rounded-xl my-2 mx-2 "
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
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-evenly min-h-[250px] text-xl">
                <li>
                  <Link
                    to="resume"
                    className={
                      location.pathname === "/resume" ? "underline" : ""
                    }
                  >
                    RESUME
                  </Link>
                </li>
                <li>
                  <Link
                    to="coffee-shop"
                    className={
                      location.pathname === "/coffee-shop" ? "underline" : ""
                    }
                  >
                    GALLERY
                  </Link>
                </li>
                <li className="uppercase">
                  <a
                    href="https://www.linkedin.com/in/varis-anekboontaweechoke-664600218/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linked-in
                  </a>
                </li>
                <li className="uppercase">
                  <a
                    href="https://github.com/jaiieth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-6 md:flex text-white absolute right-10 top-[11px] font-semibold font-san text-2xl ">
            <Link
              to="resume"
              className={
                location.pathname === "/resume"
                  ? " bg-gray-300 rounded-lg text-black px-2 shadow-[inset_0_0_5px_rgba(0,0,0,0.8)]"
                  : "px-2"
              }
            >
              RESUME
            </Link>
            <Link
              to="coffee-shop"
              className={
                location.pathname === "/coffee-shop"
                  ? " bg-gray-300 rounded-lg text-black px-2 shadow-[inset_0_0_5px_rgba(0,0,0,0.8)]"
                  : "px-2"
              }
            >
              GALLERY
            </Link>
            <li>
              <a
                href="https://www.linkedin.com/in/varis-anekboontaweechoke-664600218/"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                LINKED-IN
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jaiieth"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </nav>
        <style></style>
      </div>
    </div>
  );
};

export default Navbar;
