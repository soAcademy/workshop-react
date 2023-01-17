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
        <div className="w-[40%] p-[40px]">
          <div className="w-[300px] h-[300px]">
            <img
              className="w-[300px] h-[300px] border-solid border-[7px] border-sky-500"
              src={myImg.url}
            ></img>
          </div>
          <div>
            <h2 className="text-[40px] font-bold ">Contact</h2>
            <div>
              <span className="text-[30px]">
                Address:
                {contact.address}
              </span>
            </div>
            <div>
              <span className="text-[30px]">
                Tel:
                {contact.tel}
              </span>
            </div>
            <div>
              <span className="text-[30px]">
                Email:
                {contact.email}
              </span>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[40px] font-bold ">Education</h2>
            </div>
            <div>{education.school1}</div>
            <div>{education.school2}</div>
            <div>{education.school3}</div>
            <div>{education.school4}</div>
          </div>
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center">
          <div>
            <div>{myInformation.name}</div>
            <div>{myInformation.position}</div>
          </div>
          <div>
            <h2 className="text-[40px] font-bold ">Experience</h2>
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
