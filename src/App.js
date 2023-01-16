import "./App.css";
import profile from "./profile.jpg";

function App() {
  return (
    <body>
      <div className="container">
        <div className="left_side">
          <div className="profileText">
            <div className="imgBx">
              <img src={profile} alt="profile" />
            </div>
            <div>
              <h2>
                Hannarong Poosomnam<br></br>
                <span>Web Developer</span>
              </h2>
            </div>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="icon"></span>
                <span className="text">+66 84971 4323 </span>
              </li>
              <li>
                <span className="icon"></span>
                <span className="text">poomhan@gmail.com </span>
              </li>
              <li>
                <span className="icon"></span>
                <span className="text">https://github.com/poomhan/</span>
              </li>
              <li>
                <span className="icon"></span>
                <span className="text">https://www.linkedin.com</span>
              </li>
              <li>
                <span className="icon"></span>
                <span className="text">Bangkok, Thailand </span>
              </li>
            </ul>
          </div>

          <div className="contactInfo-education">
            <h3 className="title">Education</h3>

            <h5>2007 - 2010</h5>
            <h4>Bachelor of Economics</h4>
            <h4>Kasetsart University</h4>
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              A Business Development who is experienced in marketing, finance,
              and investment for over ten years, I am a knowledge enthusiast who
              is transitioning to a Software Developer. With background
              knowledge in finance plus software development skills, I firmly
              believe that my talents can improve online sales for businesses as
              well as making consumer lives easier.
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2016 - 2021</h5>
                <h5>Sureetriboon Holding CO., LTD.</h5>
              </div>
              <div className="text">
                <h4>Business Development Executive</h4>
                <p>
                  Example of working project: vich.ai, a comprehensive meeting
                  room booking and management solution including its e-commerce
                  system and customer support service for Vich customers
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2010 - 20215</h5>
                <h5>Kasikorn Securities </h5>
              </div>
              <div className="text">
                <h4>Associate - Equity Wealth Management</h4>
                <p>
                  Won EM Platinum Star Award 2014, selected from stockbrokers
                  who gained the highest fee in the segment, achieved corporate
                  culture and effective customer management, and exceeded
                  performance goals.
                </p>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <h2 class="title2">Professional Skills</h2>
            <div className="box">
              <h4>Html</h4>
              <div className="percent">
                <div ></div>
              </div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
              </div>
            </div>
            <div className="box">
              <h4>Javascript</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>Python</h4>
              <div className="percent"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
