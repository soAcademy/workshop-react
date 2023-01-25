import "./index.css";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

{
  /*Block First*/
}
const Resume = () => {
  const info = {
    aboutMe:
      "Bond rungrot is a student. He is originally from a small town in New England but currently lives in the city. He graduated with a degree in computer science and works as a software developer. In his free time, he enjoys playing video games, watching movies and playing chess. He's also a big sports fan and loves to play basketball. He's currently learning to code in Python and hopes to develop his own game one day. David is a very outgoing person and loves to make new friends. He's a big believer in living in the present and making the most of every moment.",
    web1: "Facebook Link เอามาใส่",
    web2: "linkedin link",
    web3: "webiste link",
    fName: "Rungrot",
    lName: "Tatiyawongwiwat",
    location: "Bangkok, Thailand",
    contactInfo: "0931234567",
    university: "Thammasat University",
    university1: "Thammasat University",
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 md:w-1/3">
          <img
            className="mt-10 h-[320px] w-[320px] rounded-full mx-auto object-cover  "
            src="bpic.jpeg"
          />
          <div className="ml-5  mt-5 text-3xl text-white font-bold uppercase"> About Me </div>
          <div className="p-5 text-white"> {info.aboutMe}</div>
          <div className="p-2">
            <b>Contact</b>
            <p>
              {info.web1}
              <br />
              {info.web2}
              {info.aboutMe}
            </p>
          </div>
        </div>


        <div className="bg-blue-400 md:w-2/3 p-2 ">
          <div className="text-3xl font-bold uppercase"> Work experience</div>
          {/* {info.data}
          {info.aboutMe} */}

{/*1. กล่องใหญ่ Education */}
          <div className="flex flex-col">
          <div className="text-3xl font-bold uppercase">Education</div>
            <div className="bg-cyan-200 p-2 md:flex flex-row">
              <div className="bg-yellow-300">2020-2022</div>
              <div className="bg-sky-400">
                <b>Master of Science</b>
                <p>{info.aboutMe}</p>
              </div>
              <div className="bg-cyan-200 md:flex flex-row">
              <div className="bg-yellow-300">2016-2020</div>
              <div className="bg-sky-400">
                <b>Bechelor of Arts</b>
                <p>{info.aboutMe}</p>
              </div>
              </div>
            </div>
          </div>

{/* 2. กล่องใหญ่ Skill */}
          <div className="flex flex-col ">
          <div className="text-3xl font-bold uppercase">Skill</div>
          {/* <div className="bg-cyan-200 p-2 md:flex flex-row">
          </div> */}
          {/* หลอดพลัง /} */}
          <div className="languageSkill py-6 text-gray-50">
            <div>
              <h2 className="text-2xl font-bold uppercase">Programming Skills</h2>
            </div>
            {/* {/ หลอดที่ 1 /} */}
            <div className="withLanguage py-3">
              {/* {/ ชิ่อแภาษา /} */}
              <div className=" text-lg font-bold py-3">
                <h1>English</h1>
              </div>
              {/* {/ ส่วนที่เป็นหลอด /} */}
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-green-400 h-full rounded-lg"
                  style={{width: '95%'}}
                ></div>
              </div>
            </div>
            {/* {/ จบหลอดที่ 1 /} */}

            <div className="withLanguage py-3">
              <div className=" text-lg font-bold py-3">
                <h1>English</h1>
            </div>
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-green-400 h-full rounded-lg"
                  style={{width: '90%'}}
             ></div>
              </div>
            </div>
            <div className="withLanguage py-3">
              <div className=" text-lg font-bold py-3">
                <h1>English</h1>
              </div>
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-green-400 h-full rounded-lg"
                  style={{width: '95%'}}
                ></div>
              </div>
            </div>
            <div className="withLanguage py-3">
              <div className=" text-lg font-bold py-3">
                <h1>English</h1>
              </div>
              <div className="bg-gray-300 h-4 w-full rounded-lg">
                <div
                  className="bg-green-400 h-full rounded-lg"
                  style={{width: '90%'}}
                ></div>
              </div>
            </div>
          </div>
          {/* {/ จบส่วนที่เป็น หลอดพลัง */}
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
