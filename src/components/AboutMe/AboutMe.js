import { aboutMe, socials } from "../ResumeInfo/ResumeInfo.js";

const AboutMe = () => (
  <div className="flex flex-col md:flex-row w-full bg-neutral-600 text-white h-fit px-2 md:flex-col md:px-8 md:p-6 md:w-1/3 md:h-full" id='aboutMe'>
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
        <div className="flex flex-col pl-1 md:pl-0 border-l border-gray-500 md:border-0 absolute top-[58px] right-8 md:relative md:right-0 md:top-0">
          <p className="text-sm md:text-xl font-semibold relative left-2 md:left-0">
            WEBSITE & SOCIAL LINKS
          </p>
          {socials.map((e) => (
            <a href={e.url} target="_blank">
              <div className="flex mt-1 max-[390px]:mt-0 md:mt-4 items-center">
                <div className="w-[30px] h-[30px] m-3 flex items-center">
                  <img
                    src={e.icon}
                    className="w-[25px] h-[25px] m-1 md:mr-4 hover:w-[30px] hover:h-[30px] relative bottom-[1px] hover:right-[3px]"
                    alt=""
                  ></img>
                </div>
                <div className="max-[390px]:text-[10px] text-xs md:text-sm">
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
);

export default AboutMe;