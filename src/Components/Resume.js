import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Layout from "./Layout";
// import Experience from "./Experience";

const Resume = (props) => (
  <main className="font-jost hyphens-manual">
    <NavBar />
    <Layout {...props} />
  </main>
);

export default Resume;
