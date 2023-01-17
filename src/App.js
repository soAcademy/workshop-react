import "./App.css";
import {
  myInformation,
  experience,
  education,
  contact,
  myImg,
} from "./myInformation";
import NavComponent from "./components/NavbarComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <div className="flex">
        <div className="w-[30%] p-[40px]">
          <div className="w-[300px] h-[300px]">
            <img className="w-[300px] h-[300px]" src={myImg.url}></img>
          </div>
          <div>
            <h2 className="text-[30px] font-bold ">Contact</h2>
            <div>
              <span className="text-[20px]">Address: </span>
              {contact.address}
            </div>
            <div>
              <span>Tel: </span>
              {contact.tel}
            </div>
            <div>
              <span>Email: </span>
              {contact.email}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[30px] font-bold ">Education</h2>
            </div>
            <div>{education.school1}</div>
            <div>{education.school2}</div>
            <div>{education.school3}</div>
            <div>{education.school4}</div>
          </div>
        </div>
        <div className="w-[70%] flex flex-col justify-center items-center">
          <div>
            <div>{myInformation.name}</div>
            <div>{myInformation.position}</div>
          </div>
          <div>
            <h2 className="text-[30px] font-bold ">Experience</h2>
            <div>{experience.job1}</div>
            <div>{experience.job2}</div>
            <div>{experience.job3}</div>
            <div>{experience.job4}</div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
