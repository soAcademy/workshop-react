import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import CoffeeShop from "./components/Gallery/CoffeeShop.js";

const Resume = () => {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col md:flex-row h-full w-screen z-1 my-12 justify-center">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resume" element={<Home />} />
              <Route path="coffee-shop" element={<CoffeeShop />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Resume;
