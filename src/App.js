import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from "./Shop";
import Resume from "./Resume";
import Resume2 from "./Resume2";

function App() {
  // return <Shop />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume2" element={<Resume2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
