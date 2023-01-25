import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Experience from "./Experience";

const Resume = (props) => (
  <main className="font-jost hyphens-manual">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="experience"
          element={
            <Experience
              headingText="Work Experience"
              expList={props.workExpList}
            />
          }
        />
        <Route
          path="education"
          element={
            <Experience headingText="Education" expList={props.eduExpList} />
          }
        />
        <Route index element={<Layout {...props} />} />
      </Routes>
    </BrowserRouter>
  </main>
);

export default Resume;
