import React from "react";
import NavComponent from "../components/NavbarComponent/NavComponent";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Button_CV from "../components/Button_CV/Button_CV";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";
import Experiences from "../components/Experiences/Experiences";
import Education from "../components/Education/Education";
import Skill from "../components/Skill/Skill";
import FooterComponent from "../components/FooterComponent/FooterComponent";

function ResumeBoeing() {
  return (
    <>
      <NavComponent />
      <div className="w-[90%] m-auto">
        <ProfileCard />
        <Skill />

        <Education />
        <Button_CV />

        <ProjectContainer />
        <Experiences />
      </div>
      <FooterComponent />
    </>
  );
}

export default ResumeBoeing;
