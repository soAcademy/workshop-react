
function App() {
  return (
    <>
      <div className="flex w-3/4 m-5 h-[750px]">
        <div className="w-1/3 bg-sky-900 rounded-lg shadow-lg">
          <div>
            <img
              src="./profilepicture.jpg"
              className="rounded-full mt-6 h-22 mx-auto w-1/2"
            ></img>
          </div>
          <div className="text-slate-50 text-2xl align-left ml-2 font-bold">
            Personal summary
          </div>
          <div className="text-sm text-slate-50 ml-4 mr-4 mt-4 mb-4">
            A well-rounded and highly motivated Aeronautics & Astronautics
            graduate with strong technical and interpersonal skills. These are
            demonstrated through the independent research and computational
            simulations performed for the Individual Project, as well as the
            role of a structural engineer in a fixed- wing UAV design project.
          </div>
          <div className="text-2xl text-slate-50 ml-2 mt-4 mr-2 font-bold">
            Website & Social Links
          </div>
          <div className="text-sm text-slate-50 ml-4 mt-4">Facebook: </div>
          <div className="text-sm text-slate-50 ml-4 mt-4">Instagram: </div>
          <div className="text-sm text-slate-50 ml-4 mt-4">Line: </div>
        </div>
        <div className="w-2/3 bg-slate-200 mr-10 rounded-lg shadow-lg">
          <div className="flex">
            <div className=" w-4/5 text-5xl text-sky-800 mt-6 ml-3 font-extrabold">
              Anawil<br></br>Yuktanand
            </div>
            <div className="bg-blue-200 rounded-lg mt-4 mr-4">
              <div className="text-xs text-sky-700 font-semibold mt-6 mr-5 text-center">
                Location: Bangkok, Thailand
              </div>
              <div className="text-xs text-sky-700 font-semibold mt-2 5r-5 text-center">
                Tel:+66835989444
              </div>
              <div className="text-xs text-sky-700 font-semibold mt-2 mr-4 ml-2">
                Email:teak.yuktanand@gmail.com
              </div>
            </div>
          </div>
          <div className=" text-2xl text-sky-800 ml-3 mt-10 font-bold">
            Work Experience and Volunteering
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-sky-600 ml-5 mt-3 font-bold">
                Hope for Children
              </div>
              <div className="text-xs text-sky-500 ml-5">March 2020</div>
              <div className="text-base text-sky-600 ml-5 mt-9 font-bold">
                IVHQ
              </div>
              <div className="text-xs text-sky-500 ml-5">June-July 2019</div>
              <div className="text-base text-sky-600 ml-5 mt-8 font-bold">
                Ban Na Rab School
              </div>
              <div className="text-xs text-sky-500 ml-5">February 2019</div>
            </div>
            <div className="w-2/3">
              <div className="text-xs text-sky-500 mt-4">
                <ul>
                  <li className="font-bold">
                    Raised 291.19 pounds for a non-profit organisation “Hope for
                    Children”
                  </li>
                  <li>
                    Developed self-confidence and strong communication skills
                    conveying messages to crowds of people
                  </li>
                </ul>
              </div>
              <div className="text-xs text-sky-500 mt-4 mr-2">
                <ul>
                  <li className="font-bold">
                    Volunteer in a construction project in Livingstone, Zambia
                  </li>
                  <li>
                    Working alongside a skilled local foreman and other
                    volunteers to build a library for a primary school
                  </li>
                </ul>
              </div>
              <div className="text-xs text-sky-500 mt-4 mr-2">
                <ul>
                  <li className="font-bold">
                    Teaching English at Ban Na Rap Primary School in Nan
                    Province, Thailand for 1 month
                  </li>
                  <li>
                    Help planning lessons, organising academic activities and
                    accompanying a group of students on a school trip
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" text-2xl text-sky-800 ml-3 mt-10 font-bold">
            Education
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-sky-600 ml-5 mt-3 font-bold">
                University of Southampton
              </div>
              <div className="text-xs text-sky-500 ml-5">
                October 2019 - June 2022
              </div>
              <div className="text-xs text-sky-500 ml-5">
                BEng Aeronautics & Astronautics
              </div>
              <div className="text-base text-sky-600 ml-5 mt-6 font-bold">
                Harrow Bangkok
              </div>
              <div className="text-xs text-sky-500 ml-5">
                August 2012 - June 2018
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-xs text-sky-500 mt-4 mr-2">
                Modules involved: Individual Project, Materials and Structures,
                Aerothermodynamics, Applications of CFD, Propulsion,
                Aerodynamics, Aircraft Structural Design, Aerospace Control
                Systems, Introduction to Aircraft Design, Experimental Methods
                for Aerodynamics, Mathematics for Engineering and the
                Environment, Systems Design and Computing, Engineering
                Management & Law
              </div>
              <div className="text-xs text-sky-500 mt-6 mr-2">
                <ul>
                  <li>
                    4 International A-Level Qualifications including Physics ,
                    Mathematics , Further Mathematics, Chemistry
                  </li>
                  <li>IELTS Academic Overall Score 7.5</li>
                  <li>9 International GCSEs Qualifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
