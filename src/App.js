// const App = () => {
//   return <h1 className="text-3xl font-bold underline">Hello World</h1>
// };
// import App from "./App1";
// import TailwindExample from "./TailwindExample"; อย่าลืมเอากลับมาจาก AnnoyClear
import Resume from "./Resume";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Skill from "./Pages/Skill";
// import Shop from "./Shop";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className= "bg-teal-700 w-full">
            <Link to="/" className="p-2 bg-teal-700 hover:bg-red-500">
              Home
            </Link>

            <Link to="/about" className="p-2 bg-teal-700 hover:bg-red-500">
              About
            </Link>

            <Link to="/Education" className="p-2 bg-teal-700 hover:bg-red-500">
              Education
            </Link>

            <Link to="/Experience" className="p-2 bg-teal-700 hover:bg-red-500">
              Experience
            </Link>

            <Link to="/Skill"
              className="p-2 bg-teal-700 hover:bg-red-500">
              Skill
            </Link>
          </div>

          {/* ของจริง nested route เราตัวนี้ไปใส่ใน Resume แทน*/}
          <Routes>
            <Route
              exact path="/"element={<Home title="Hello Bond"/>}
            />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Education" element={<Education />} />
            <Route exact path="/Experience" element={<Experience />} />
            <Route exact path="/Skill" element={<Skill />} />
            
            <Route exact path="*" element={<>404 Not Found</>} />
          </Routes>
          {/* ของจริง */}

    {/* <TailwindExample/> */}
    <Resume/>
    <div className="bg-green-700 w-full">This is Footer</div>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;



// const App = () => {
//   const info
//   return (
//   <>
  
//   </>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <Shop/>
//   );
// };
// export default App;











