import React from "react";
import "./FooterComponent.css";
import { GoCode } from "react-icons/go";

function FooterComponent() {
  const whiteTextContact = "text-white text-";
  return (
    <>
      <div id="ft" className="w-[100%] flex flex-col py-6 lg:pl-20 md:pl-10 ">
        <h1 className="text-sky-500 ml-6 lg:text-5xl">CONTACT</h1>
        <div className="text-white ml-6 lg:text-3xl">
          <p>napatpimon.pon@gmail.com</p>
          <p>Bangkok, Thailand</p>
        </div>
        <div className="ml-6">
          <ul className="flex -translate-x-3">
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
    </>
  );
}

export default FooterComponent;
