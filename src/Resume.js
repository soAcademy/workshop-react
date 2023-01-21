
import Navbar from './components/Navbar/Navbar.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import MainInfo from './components/MainInfo/MainInfo.js'
import Footer from "./components/Footer/Footer.js";

const Resume = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex flex-col md:flex-row h-full w-screen z-1">
        <AboutMe />
        <MainInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
