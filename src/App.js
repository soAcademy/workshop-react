import TailwindExample from "./App2.js";
import Product from "./Product.js";
import Resume from "./Resume.js";
import Shop from "./Shop.js";
import string from "./Tiworkshop.js";
function App() {
  return (
    <>
      <Resume  info={{
          summary: "Personal Summary",
          summaryinfo:
            " A well-rounded and highly motivated Aeronautics & Astronautics graduate with strong technical and interpersonal skills. These are demonstrated through the independent research and computational simulations performed for the Individual Project, as well as the role of a structural engineer in a fixed- wing UAV design project.",
          language: "Language Skills",
          eng: "English",
          thai: "Thai",
          website: "Website & Social Links",
          facebook: "Facebook: Teak Yuktanand",
          instagram: "Instagram: teak_anawil",
          line: "Line: teak88",
          name: (
            <>
              Anawil
              <br />
              Yuktanand
            </>
          ),
          location: "Location: Bangkok, Thailand",
          tel: "0835989444",
          email: "teak.yuktanand@gmail.com",
          titleright1: " Work Experience and Volunteering",
          hope: " Hope for Children",
          ivhq: "IVHQ",
          school: "Ban Na Rab School",
          hopeinfo:
            "Raised 291.19 pounds for a non-profit organisation Hope for Children",
          hopeinfo2:
            " Developed self-confidence and strong communication skills conveying messages to crowds of people",
          ivhqinfo:
            "Volunteer in a construction project in Livingstone, Zambia",
          ivhqinfo2:
            " Working alongside a skilled local foreman and other volunteers to build a library for a primary school",
          schoolinfo:
            "Teaching English at Ban Na Rap Primary School in Nan Province, Thailand for 1 month",
          schoolinfo2:
            " Help planning lessons, organising academic activities and accompanying a group of students on a school trip",
          education: "Education",
          uni: "University",
          unidate: "October 2019 - June 2022",
          unicourse: "BEng Aeronautics & Astronautics",
          highschool: "school",
          highschooldate: "August 2012 - June 2018",
          unidetail:
            " Modules involved: Individual Project, Materials and Structures, Aerothermodynamics, Applications of CFD, Propulsion, Aerodynamics, Aircraft Structural Design, Aerospace Control Systems, Introduction to Aircraft Design, Experimental Methods for Aerodynamics, Mathematics for Engineering and the Environment, Systems Design and Computing, Engineering Management & Law",
          highschooldetail:
            "4 International A-Level Qualifications including Physics , Mathematics , Further Mathematics, Chemistry",
          highschooldetail2: "IELTS Academic Overall Score 7.5",
          highschooldetail3: "9 International IGCSEs Qualifications",
          hobbies: "Hobbies",
          music: "Music",
          traveling: "Traveling",
          reading: "Reading",
        }}/>
      
    </>
  );
}

export default App;
