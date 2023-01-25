import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import Banner from "./components/banner/Banner";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import ContactLeft from "./components/contact/ContactLeft";
import Navbar from "./components/navbar/Navbar";
import Trial_Nav from "./Trial_Nav";
// import Features from "./components/features/Feature";

const Resume = () => {
	return (
		<Router>
		{/* <div className="w-full h-auto bg-bodyColor text-lightText">
			<div className="max-w-screen-xl mx-auto px-16">
			<Navbar />
			<hr className="mt-5 w-full" />
			<Banner />
			<Features />
			</div>
		</div> */}
			{/* <Routes> */}
			{/* <Route exact path="contactleft" element={<ContactLeft />} /> */}
				<Navbar />
			{/* </Routes> */}
		</Router>
	);
}

export default Resume;