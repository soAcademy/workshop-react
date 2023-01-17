import "./resume2.css";
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import userImg from "./user1.jpg";

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
      jobPosition: "Junior Web Developer",
      desc: "Lorem ipsum dolor sit, amet  adipisicing elit. Praesentium, recusandae? ipsum dolor sit, amet consectetur",
    },
    {
      name: "Lorem abc",
      time: "2014-2016",
      location: "New York",
      jobPosition: "Junior Web Developer",
      desc: "Lorem ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae? ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae",
    },
    {
      name: "pixelate abc",
      time: "2013-2014",
      location: "New York",
      jobPosition: "IT Support",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. , recusandae?",
    },
  ];

  const edu = [
    {
      name: "University abc",
      time: "2011-2013",
      location: "New York",
      major: "Web Developer",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. , recusandae?",
    },
    {
      name: "College abc",
      time: "2010-2011",
      location: "New York",
      major: "Computer Science",
      desc: "Lorem ipsum dolor sit, amet consectetur  elit. Praesentium, recusandae?",
    },
  ];

  return (
    <div className="flex justify-center w-100 my-12">
      <div className="flex w-[800px] h-[1000px] shadow-md">
        <div className="w-[30%] bg-neutral-600 text-zinc-50 p-5">
          <div className="flex justify-center my-10">
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={userImg}
              alt="logo"
            />
          </div>
          <div className="border-b border-zinc-50 my-10">
            <h2 className="text-2xl font-medium">ABOUT ME</h2>
            <p className="font-light pt-8 pb-10">{about}</p>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-medium">WEBSITE & SOCIAL LINKS</h2>
            <ul className="pt-5">
              {website.map((r, idx) => (
                <li key={idx} className="mb-4">
                  <p>{Object.keys(r)}</p>
                  <a className="font-light" href={Object.values(r)}>
                    {Object.values(r)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[70%] text-neutral-600 bg-zinc-50 p-5">
          <div className="flex justify-between border-b border-neutral-600 mt-8 py-8">
            <div>
              <h1 className="font-robCond font-medium text-5xl leading-10 tracking-tighter">
                {name.firstName.toUpperCase()}
              </h1>
              <h1 className="font-robCond font-medium text-5xl leading-10 tracking-tighter">
                {name.lastName.toUpperCase()}
              </h1>
              <p className="">{name.job.toUpperCase()}</p>
            </div>
            <div className="font-light text-sm">
              <p className="flex">
                <FaHome size={16}/>
                <span className="pl-2">{addr.address}</span>
              </p>
              <p className="flex">
                <FaMobileAlt size={16}/>
                <span className="pl-2">{addr.tel}</span>
              </p>
              <p className="flex">
                <FaRegEnvelope size={16}/>
                <span className="pl-2">{addr.email}</span>
              </p>
            </div>
          </div>
          <div className="border-b border-neutral-600 py-8">
            <h2 className="text-2xl font-medium pb-8">WORK EXPERIENCE</h2>
            {workX.map((r, idx) => {
              return (
                <div className="flex" key={idx}>
                  <div className="workXLeft w-[40%] pb-5">
                    <h4 className="font-bold">{r.name.toUpperCase()}</h4>
                    <p className="text-sm">{r.location}</p>
                    <p className="text-sm">{r.time}</p>
                  </div>
                  <div className="workXRight w-[60%] pl-5 pb-5">
                    <h4 className="font-bold text-sm">{r.jobPosition}</h4>
                    <p className="text-sm">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="py-8">
            <h2 className="text-2xl font-medium pb-8">EDUCATION</h2>
            {edu.map((r, idx) => {
              return (
                <div className="flex" key={idx}>
                  <div className="workXLeft w-[40%] pb-5">
                    <h4 className="font-bold">{r.name.toUpperCase()}</h4>
                    <p className="text-sm">{r.location}</p>
                    <p className="text-sm">{r.time}</p>
                  </div>
                  <div className="workXRight w-[60%] pl-5 pb-5">
                    <h4 className="font-bold text-sm">{r.major}</h4>
                    <p className="text-sm">{r.desc}</p>
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
