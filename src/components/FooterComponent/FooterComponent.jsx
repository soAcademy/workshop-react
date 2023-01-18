import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  const whiteTextContact = "text-white text-";
  return (
    <>
      <div id="ft" className="w-[100%] flex flex-col py-6 lg:pl-20">
        <h1 className="text-white ml-6">CONTACT</h1>
        <div className="text-gray-700 ml-6">
          <p>napatpimon.pon@gmail.com</p>
          <p>Bangkok, Thailand</p>
          <p>made by Napatpimon Boeing</p>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
