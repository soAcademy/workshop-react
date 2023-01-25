import AboutMe from "../AboutMe/AboutMe"
import MainInfo from "../MainInfo/MainInfo.js";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-fit w-screen z-1 border-2 border-black">
      <AboutMe />
      <MainInfo />
    </div>
  );
};

export default Home;