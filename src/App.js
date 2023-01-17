import "./App.css";
import DewImg from "./dew2.jpg";
import locationImg from "./location.png";
import telImg from "./tel.png";
import emailImg from "./email.png";

const aboutme = "ABOUT ME";
const aboutmeContent = "My name is Thanapon Bunchot...I come from Thailand.";
const websiteLinkHeader = "WEBSITE & SOCIAL LINKS";
const WebsiteContent = " Facebook";
const fullname = "THANAPON BUNCHOT";
const contactInfo = "104/7 50 Phahonyothin, Saimai, BKK    +66-93-537-2883         thanapon.bunchot@gmail.com      ";
const workexHeader = "WORK EXPERIENCE";
const workYear = "2022-present "

function App() {
  return (
    <div className="frame">
      <div className="left-block">
        <div className="img">
          <img className="imgDew" src={DewImg} />
        </div>
        <div className="aboutme">{aboutme}</div>
        <div className="aboutmeBody">{aboutmeContent}</div>
        <div className="contact">{websiteLinkHeader}</div>
        <div className="contactBody">{WebsiteContent}</div>
      </div>

      <div className="right-block">
        <div className="header">
          <div className="name">
            {fullname}
            <div className="job">Fullstack dev</div>
          </div>
          <div className="tel">
            <div className="icon">
              < img className = 'address'src={locationImg}></img>
              < img className = 'address'src={telImg}></img>
              < img className = 'address3'src={emailImg}></img>
            </div>
            <div className="telInfo">{contactInfo}</div>
          </div>
        </div>

        <div className="work-ex">
          <div className="head-work-ex">{workexHeader}</div>
          <div className="workFrame">
            <div className="work-nav">{workYear}</div>
            <div className="work-content">work-content</div>
          </div>
        </div>

        <div className="education">
          <div className="head-education-ex">Education</div>
          <div className="educationFrame">
            <div className="education-nav">education year</div>
            <div className="education-content">education-content</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
