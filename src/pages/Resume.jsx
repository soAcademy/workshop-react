import React from "react";
import NavComponent from "../components/NavbarComponent/NavComponent";
import { myImg } from "../myInformation";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { GoCode } from "react-icons/go";

function Resume() {
  const textSizeXl = "text-3xl";
  const topic = "underline";
  return (
    <>
      <NavComponent />
      <div className="w-[900px] m-auto">
        {/* container1 */}
        <div className="bg-gray-300 rounded-[50px] mt-4 mb-8 flex p-6 drop-shadow-xl">
          <div className="w-[40%] flex justify-center items-center">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-8 border-sky-500 ">
              <img className="w-full h-full object-cover" src={myImg.url} />
            </div>
          </div>
          <div className="w-[60%] flex flex-col justify-center pl-4">
            <div className="mt-4 mb-4">
              <h1 className={`${textSizeXl}`}>Napatpimon Ponpathanapaisarn</h1>
              <h2 className="text-2xl">Junior Software Developer</h2>
            </div>

            <div>
              <h4 className="text-xl mt-4">napatpimon.pon@gmail.com</h4>
              <ul className="flex -translate-x-3">
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://www.facebook.com/boeing.miffy/"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/facebook-circled--v1.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://twitter.com/boeing_miffy"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://www.instagram.com/bingbing_cat636/"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://github.com/khunboeing"
                  >
                    <img src="https://img.icons8.com/glyph-neue/64/000000/github.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://www.linkedin.com/in/napatpimon-ponpathanapaisarn-162420243/"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    target="_blank"
                    className="btn-glass"
                    href="https://boeingportfirst.vercel.app/"
                  >
                    <GoCode />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* container1 end */}
        {/* container2 */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="pl-4">
              <h2 className="underline">ABOUT ME</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis reprehenderit alias beatae soluta officiis cumque
                sit aut sint tenetur eligendi!
              </p>
            </div>
            <div className="mt-4 pl-4">
              <h2 className="underline">EDUCATION</h2>
              <p>MaeFahLuang University</p>
              <p>Aviation Business Management </p>
            </div>
          </div>
          <div className="w-1/2 border-l-2 border-gray-600 ">
            <h2 className="pl-4 underline">CERTIFICATE</h2>
            <p className="ml-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              necessitatibus perspiciatis pariatur veritatis deserunt, excepturi
              obcaecati dolor praesentium suscipit tempora assumenda quam
              facilis similique numquam quaerat, incidunt ut eos ea!
            </p>
          </div>
        </div>
        {/* container2 end*/}
        {/* container3 */}
        <div className="border-t-2 border-gray-600 mt-6 bg-gray-300 pl-4 pb-8 rounded-b-[30px] drop-shadow-xl">
          <h2 className="mt-6 underline">PROJECTS</h2>
          <div>
            <h2 className="underline">Project Name</h2>
            <p>
              Explain project Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ullam nemo soluta, earum aliquam omnis
              voluptates perferendis libero dolore saepe minus?
            </p>
            <a href="#">link to project</a>
          </div>
          <div>
            <h2 className="underline">Project Name</h2>
            <p>
              Explain project Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ullam nemo soluta, earum aliquam omnis
              voluptates perferendis libero dolore saepe minus?
            </p>
            <a href="#">link to project</a>
          </div>
          <div>
            <h2 className="underline">Project Name</h2>
            <p>
              Explain project Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ullam nemo soluta, earum aliquam omnis
              voluptates perferendis libero dolore saepe minus?
            </p>
            <a href="#">link to project</a>
          </div>
          <div>
            <h2 className="underline">Project Name</h2>
            <p>
              Explain project Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ullam nemo soluta, earum aliquam omnis
              voluptates perferendis libero dolore saepe minus?
            </p>
            <a href="#">link to project</a>
          </div>
          <div>
            <h2 className="underline">Project Name</h2>
            <p>
              Explain project Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ullam nemo soluta, earum aliquam omnis
              voluptates perferendis libero dolore saepe minus?
            </p>
            <a href="#">link to project</a>
          </div>
        </div>
        {/* container3 end*/}
      </div>
      <FooterComponent />
    </>
  );
}

export default Resume;
