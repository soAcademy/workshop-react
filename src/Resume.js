import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const aboutMe =
  "Experienced aircraft mechanic seeking to transition into full-stack developer role. Currently enrolled in a developer bootcamp, actively learning and developing skills in web development, including technologies such as JavaScript, React, and Node.js. Strong problem-solving and attention to detail skills, honed through my experience in aircraft maintenance. Passionate about technology and eager to apply my skills to a new and exciting career path.";
const socials = [
  {
    platform: "Facebook",
    url: "https://facebook.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    icon: "https://www.mmthailand.com/wp-content/uploads/2020/04/ig-icon.png",
  },
  {
    platform: "Github",
    url: "https://github.com",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
];

const workExperience = [
  {
    company: "NOK AIR",
    year: "2020-2021",
    role: "Happy Mechanic",
    jobDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores velit dignissimos distinctio ipsa eum qui molestiae amet est perferendis!",
  },
  {
    company: "THAI LION AIR",
    year: "2017-2020",
    role: "Happy Mechanic",
    jobDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores velit dignissimos distinctio ipsa eum qui molestiae amet est perferendis!",
  },
];
const education = [
  {
    school: "CIVIL AVIATION TRAINING CENTER",
    year: "2014-2016",
    degree: "Diploma",
    program:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores velit dignissimos distinctio ipsa eum qui molestiae amet est perferendis!",
  },
  {
    school: "King Mongkut's University of Technology North Bangkok",
    year: "2011-2013",
    degree: "Vocational Certificate",
    program:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores velit dignissimos distinctio ipsa eum qui molestiae amet est perferendis!",
  },
];

const Resume = () => {
  return (
    <div className="h-full w-full">
      <div className="h-10 md:h-12 text-white w-full">
        <div className="flex h-10 md:h-12 w-full justify-between fixed z-50 bg-black shadow-lg">
          <button className="h-10 md:h-full ml-2 fixed md:relative z-50">
            <img
              src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"
              className="h-10 md:h-full p-2 md:p-3"
              alt=""
            ></img>
          </button>
          <div className="pr-4 flex justify-between items-center text-lg">
            <button className="rounded-md px-2 mx-1 invisible md:visible">HOME</button>
            <button className="rounded-md px-2 mx-1 invisible md:visible">GITHUB</button>
            <button className="rounded-md px-2 mx-1 invisible md:visible">LINKED-IN</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-full w-screen z-1">
        <div className="flex flex-col md:flex-row w-full bg-neutral-600 text-white h-fit px-2 md:flex-col md:px-8 md:p-6 md:w-1/3 md:h-full">
          <div className="flex items-center md:justify-center py-4 w-full md:h-1/5">
            <img
              src="./profile.jpg"
              alt="profile.jpg"
              className="object-cover relative left-5 top-1 md:left-0 top-0 md:h-full w-1/3 md:w-full lg:w-2/3 rounded-full "
            ></img>
          </div>
          <div className="flex flex-row md:flex-col h-full md:h-2/5">
            <div className="pl-5 md:pl-0 h-1/5 mt-4 p-1 md:h-full md:w-full">
              <p className="text-base md:text-xl font-semibold">ABOUT ME</p>
              <p className="py-2 pb-5 mb-4 text-sm md:text-sm text-gray-300">
                {aboutMe}
              </p>
            </div>
            <hr className="py-2" />
            <div className="h-fit py-5 w-2/5 flex justify-center w-2/5 md:w-full ">
              <div className="flex flex-col pl-1 md:pl-0 border-l border-gray-500 md:border-0 absolute top-[58px] right-10 md:relative md:right-0 md:top-0">
                <p className="text-sm md:text-xl font-semibold">
                  WEBSITE & SOCIAL LINKS
                </p>
                {socials.map((e) => (
                  <a href={e.url} target="_blank">
                    <div className="flex mt-1 md:mt-4 items-center">
                      <img
                        src={e.icon}
                        className="w-[25px] h-[25px] m-1 md:mr-4"
                        alt=""
                      ></img>
                      <div className="text-xs md:text-sm">
                        <pre>
                          {e.platform}
                          <p>{e.url}</p>
                        </pre>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 px-4 md:w-2/3 text-neutral-600 z-40">
          <div className="h-1/6">
            <div className="md:py-8 flex justify-between">
              <div className="md:w-2/5 font-bold">
                <pre className="md:text-3xl">
                  VARIS
                  <p>ANEKBOONTAWEECHOKE</p>
                  <p className="text-xs md:text-sm font-light">
                    FULL-STACK DEVELOPER
                  </p>
                </pre>
              </div>
              <div className="md:w-2/5 items-left text-xs md:text-sm flex flex-col justify-center">
                <div className="flex">
                  <FaRegAddressCard className="relative top-0.5" />
                  &nbsp;
                  <p>14585 10th AveWhitestone, NY</p>
                </div>
                <div className="flex">
                  <BsTelephone className="relative top-0.5" />
                  &nbsp;
                  <p>+6687-561-6766</p>
                </div>
                <div className="flex">
                  <MdOutlineEmail className="relative top-1" />
                  &nbsp;
                  <p>midzty.rb128@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-2 text-gray-900"/>
          <div className="h-5/12 md:px-2">
            <p className="my-4 pb-2 font-bold md:text-xl">WORK EXPERIENCE</p>
            {workExperience.map((e) => (
              <div className="py-2 flex ">
                <div className="w-1/3 py-4">
                  <div className=" relative -top-[24px]">
                    <p className="font-semibold text-sm md:text-base">
                      {e.company}
                    </p>
                    <p className="relative top-2 text-xs md:text-base">
                      {e.year}
                    </p>
                  </div>
                </div>
                <div className="w-2/3 pl-4 border-l">
                  <ol className="pl-4 relative -top-[9px] -left-[17px] text-sm md:text-base">
                    <li className="font-semibold list-disc ">{e.role}</li>
                    <li className="relative top-2 ">{e.jobDesc}</li>
                  </ol>
                </div>
              </div>
            ))}
          </div>
          <div className="h-5/12 md:px-0">
            <p className="my-2 py-2 font-bold md:text-xl border-t">EDUCATION</p>
            {education.map((e) => (
              <div className="py-2 flex">
                <div className="w-1/3 py-4">
                  <div className=" relative -top-[24px] text-sm md:text-base">
                    <p className="font-semibold">{e.school}</p>
                    <p className="relative top-2">{e.year}</p>
                  </div>
                </div>
                <div className="w-2/3 pl-4 border-l">
                  <ol className="pl-4 relative -top-[9px] -left-[17px] text-sm md:text-base">
                    <li className="font-semibold list-disc">{e.degree}</li>
                    <li className="relative top-2">{e.program}</li>
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white font-semibold h-12 w-full bg-black shadow-xl">
        Copyright &copy;
      </div>
    </div>
  );
};

export default Resume;
