import "./resume.css";
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";

const Resume = () => {
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dignissimos saepe unde alias exercitationem laborum commodi blanditiis consectetur quam optio atque minima totam reprehenderit sunt culpa.";
  const website = [
    { Facebook: "http://www.facebook.com" },
    { Twitter: "http://twitter.com" },
    { Instgram: "http://instagram.com" },
  ];

  const name = {
    firstName: "Johnjohn",
    lastName: "Doedoeoe",
    job: "Junior Web Developer",
  };

  const addr = {
    address: "123/456 asdf, ghjk 0009",
    tel: "012-3456789",
    email: "JohnJohnJohn@gmail.com",
  };

  const workX = [
    {
      name: "Lorem abc (Orlando)",
      time: "2017-2020",
      location: "Orlando",
      jobPosition: 'Junior Web Developer',
      desc: "Lorem ipsum dolor sit, amet  adipisicing elit. Praesentium, recusandae? ipsum dolor sit, amet consectetur",
    },
    {
      name: "Lorem abc",
      time: "2014-2016",
      location: "New York",
      jobPosition: 'Junior Web Developer',
      desc: "Lorem ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae? ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae",
    },
    {
      name: "pixelate abc",
      time: "2013-2014",
      location: "New York",
      jobPosition: 'IT Support',
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. , recusandae?",
    },
  ];

  const edu = [
    {
      name: "University abc",
      time: "2011-2013",
      location: "New York",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. , recusandae?",
    },
    {
      name: "College abc",
      time: "2010-2011",
      location: "New York",
      desc: "Lorem ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae?",
    },
  ];

  return (
    <div className="res-body">
      <div className="container">
        <div className="left">
          <div className="img-block">
            <img src="/user1.jpg" alt="logo" />
          </div>
          <div className="about">
            <h2>ABOUT ME</h2>
            <p>{about}</p>
          </div>
          <div className="social">
            <h2>WEBSITE & SOCIAL LINKS</h2>
            <ul>
              {website.map((r, idx) => (
                <li key={idx}>
                  <p>{Object.keys(r)}</p>
                  <a className="social-link" href={Object.values(r)}>
                    {Object.values(r)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="rightTop">
            <div className="name-block">
              <h1>{name.firstName.toUpperCase()}</h1>
              <h1>{name.lastName.toUpperCase()}</h1>
              <p>{name.job.toUpperCase()}</p>
            </div>
            <div className="contact-block">
              <p>
                <FaHome /> {addr.address}
              </p>
              <p>
                <FaMobileAlt /> {addr.tel}
              </p>
              <p>
                <FaRegEnvelope /> {addr.email}
              </p>
            </div>
          </div>
          <div className="rightMid">
            <h2>WORK EXPERIENCE</h2>
            {workX.map((r, idx) => {
              return (
                <div className="workX" key={idx}>
                  <div className="workXLeft">
                    <h4>{r.name.toUpperCase()}</h4>
                    <p>{r.location}</p>
                    <p>{r.time}</p>
                  </div>
                  <div className="workXRight">
                    <h4>{r.jobPosition}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rightBtm">
            <h2>EDUCATION</h2>
            {edu.map((r, idx) => {
              return (
                <div className="workX" key={idx}>
                  <div className="workXLeft">
                    <h4>{r.name.toUpperCase()}</h4>
                    <p>{r.location}</p>
                    <p>{r.time}</p>
                  </div>
                  <div className="workXRight">
                    <p>{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
