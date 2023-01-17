import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <>
      <div id="footer" className="">
        <div>
          <p>Contact Me ...</p>
        </div>
        <div>
          <a href="#">
            <p id="github">git hub</p>
          </a>
          <a href="#">
            <p id="facebook">facebook</p>
          </a>
          <a href="#">
            <p id="linkedin">linkedin</p>
          </a>
          <a href="#">
            <p id="ig">instagram</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
