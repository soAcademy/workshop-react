import "./resume2.css";
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import userImg from "./user1.jpg";

const Resume = () => {
  const data = {
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dignissimos saepe unde alias exercitationem laborum commodi blanditiis consectetur quam optio atque minima totam reprehenderit sunt culpa.",
    website: [
      { Facebook: "http://www.facebook.com" },
      { Twitter: "http://twitter.com" },
      { Instgram: "http://instagram.com" },
    ],
    name: {
      firstName: "Johnjohn",
      lastName: "Doedoeoe",
      job: "Junior Web Developer",
    },
    addr: {
      address: "123/456 asdf, ghjk 0009",
      tel: "012-3456789",
      email: "JohnJohnJohn@gmail.com",
    },
    workX: [
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
    ],
    edu: [
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
    ],
  };

  return (
    <div className="flex justify-center w-100 my-5 md:my-10">
      <div className="flex flex-col md:flex-row md:w-[800px] md:h-[1000px] md:shadow-md">
        <div className="w-100 md:w-[30%] bg-neutral-600 text-zinc-50 mx-5 md:mx-0 p-5">
          <div className="flex justify-center my-10">
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={userImg}
              alt="logo"
            />
          </div>
          <div className="md:hidden">
            <h1 className="font-robCond font-medium text-5xl text-center md:text-left leading-10 tracking-tighter">
              {data.name.firstName.toUpperCase()}
            </h1>
            <h1 className="font-robCond font-medium text-5xl text-center md:text-left leading-10 tracking-tighter">
              {data.name.lastName.toUpperCase()}
            </h1>
            <p className="text-center md:text-left">
              {data.name.job.toUpperCase()}
            </p>
          </div>

          <div className="flex justify-center md:hidden font-light text-sm mt-10 md:mt-0">
            <div>
              <div className="flex"><FaHome className="text-lg mr-2" />{data.addr.address}</div>
              <div className="flex"><FaMobileAlt className="text-lg mr-2" />{data.addr.tel}</div>
              <div className="flex"><FaRegEnvelope className="text-lg mr-2" />{data.addr.email}</div>
            </div>
          </div>

          <div className="border-b border-zinc-50 my-10">
            <h2 className="text-2xl text-center md:text-left font-medium">
              ABOUT ME
            </h2>
            <p className="font-light pt-8 pb-10">{data.about}</p>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-medium">WEBSITE & SOCIAL LINKS</h2>
            <ul className="pt-5">
              {data.website.map((r, idx) => (
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

        <div className="w-100 md:w-[70%] text-neutral-600 bg-zinc-50 mx-5 md:mx-0 p-5">
          <div className="hidden md:block md:flex md:justify-between border-b border-neutral-600 mt-8 py-8">
            <div className="">
              <h1 className="font-robCond font-medium text-5xl text-center md:text-left leading-10 tracking-tighter">
                {data.name.firstName.toUpperCase()}
              </h1>
              <h1 className="font-robCond font-medium text-5xl text-center md:text-left leading-10 tracking-tighter">
                {data.name.lastName.toUpperCase()}
              </h1>
              <p className="text-center md:text-left">
                {data.name.job.toUpperCase()}
              </p>
            </div>

            <div className="flex justify-center hidden md:block font-light text-sm mt-10 md:mt-0">
              <div>
                <div className="flex"><FaHome className="text-lg mr-2" />{data.addr.address}</div>
                <div className="flex"><FaMobileAlt className="text-lg mr-2" />{data.addr.tel}</div>
                <div className="flex"><FaRegEnvelope className="text-lg mr-2" />{data.addr.email}</div>
              </div>
            </div>

          </div>

          <div className="border-b border-neutral-600 py-8">
            <h2 className="text-2xl text-center md:text-left font-medium pb-8">
              WORK EXPERIENCE
            </h2>
            {data.workX.map((r, idx) => {
              return (
                <div className="flex" key={idx}>
                  <div className="workXLeft w-[40%] pb-5">
                    <h4 className="font-bold pr-3 md:pr-0">
                      {r.name.toUpperCase()}
                    </h4>
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
            <h2 className="text-2xl text-center md:text-left font-medium pb-8">
              EDUCATION
            </h2>
            {data.edu.map((r, idx) => {
              return (
                <div className="flex" key={idx}>
                  <div className="workXLeft w-[40%] pb-5">
                    <h4 className="font-bold pr-3 md:pr-0">
                      {r.name.toUpperCase()}
                    </h4>
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
