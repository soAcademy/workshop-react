import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { Header2, Header3 } from "./header2";
import "./App-1.css";
import pic1 from "./squirrel.jpg";

const App = () => {
  const info = {
    aboutMe: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Perferendis, qui impedit. Ut tempora incidunt eaque itaque pariatur,
    illum, laudantium corporis ipsam magnam, soluta ipsa deleniti porro
    ullam. Repudiandae fugiat dolor suscipit fuga laboriosam ipsa? Saepe
    unde suscipit voluptas quis itaque, exercitationem maiores quisquam
    iusto ipsa assumenda numquam nihil, sint esse!`,
    facebook: "http://www.facebook.com",
    fname: `KUNLANIS`,
    lname: `YOONUCH`,
    location: `Bangkok`,
    contactInfo: `000-000-0000`,
    qualify: `Assc. Engineer`,
    school: `RTW`,
    schoolDetail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Inventore dicta officiis dolore. Minus eveniet officiis at, sint
    eos placeat et?`,
    university: `KMUTT`,
    universityDetail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Inventore dicta officiis dolore. Minus eveniet officiis at, sint
    eos placeat et?`,
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/id/1391726153/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%82%E0%B8%8A%E0%B8%A7%E0%B9%8C%E0%B8%A5%E0%B8%B5%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94%E0%B8%9A%E0%B8%99%E0%B9%81%E0%B8%82%E0%B8%99.jpg?s=612x612&w=0&k=20&c=DBq1tko8js_Eq7knIdeFjAxyIbEfaVJkGoiDyriVMzY="
            alt=""
          />
        </div>
        <div className="about-me">
          <h2>ABOUT ME</h2> <p>{info.aboutMe}</p>
        </div>
        <div>
          <h2>website and school</h2>
          <h3>Facebook:</h3>
          <p>{info.facebook}</p>
          <h3>Facebook:</h3>
          <p>{info.facebook}</p>
          <h3>Facebook:</h3>
          <p>{info.facebook}</p>
        </div>
      </div>
      <div className="right-section">
        <div className="right-top">
          <div className="my-name">
            <h1>{info.fname}</h1>
            <h1>{info.lname}</h1>
          </div>
          <div className="my-info">
            <h4>
              Location :<br />
              {info.location}
            </h4>
            <h4>
              Contact Information : <br />
              {info.contactInfo}
            </h4>
            <h4>
              Summary of Qualifications: <br />
              {info.qualify}
            </h4>
          </div>
        </div>
        <div className="work-exp">
          <div className="">
            <h3>WORK EXPERIENCE</h3>
          </div>
          <div className="company-detail">
            <div className="company">
              <h4>company1</h4>
            </div>
            <div className="details">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore dicta officiis dolore. Minus eveniet officiis at, sint
                eos placeat et?
              </h4>
            </div>
          </div>
          <div className="company-detail">
            <div className="company">
              <h4>company2</h4>
            </div>
            <div className="details">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore dicta officiis dolore. Minus eveniet officiis at, sint
                eos placeat et?
              </h4>
            </div>
          </div>
          <div className="company-detail">
            <div className="company">
              <h4>company3</h4>
            </div>
            <div className="details">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore dicta officiis dolore. Minus eveniet officiis at, sint
                eos placeat et?
              </h4>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="">
            <h3>EDUCATION</h3>
          </div>
          <div className="education-detail">
            <div>
              <h4>School : {info.school} </h4>
            </div>
            <div>
              <h4>{info.schoolDetail}</h4>
            </div>
          </div>
          <div className="education-detail">
            <div>
              <h4>University : {info.university} </h4>
            </div>
            <div>
              <h4>{info.universityDetail}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
