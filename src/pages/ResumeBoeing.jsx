import React from "react";
import NavComponent from "../components/NavbarComponent/NavComponent";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";
import Experiences from "../components/Experiences/Experiences";
import Education from "../components/Education/Education";
import Skill from "../components/Skill/Skill";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import Hamburger from "../components/Hamburger/Hamburger";
import Overlay from "../components/Overlay/Overlay";
import { useState } from "react";

function ResumeBoeing() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const openHamburger = () => setIsHamburgerOpen(true);
  const closeHamburger = () => setIsHamburgerOpen(false);

  return (
    <>
      <NavComponent openHamburger={openHamburger} />
      {isHamburgerOpen && (
        <>
          <Hamburger /> <Overlay closeHamburger={closeHamburger} />
        </>
      )}

      <div className="w-[90%] m-auto 2xl:w-[80%] 3xl:w-[65%]">
        <ProfileCard />
        <Skill />

        <Education />

        <ProjectContainer />
        <Experiences />
      </div>
      <FooterComponent />
    </>
  );
}

export default ResumeBoeing;
