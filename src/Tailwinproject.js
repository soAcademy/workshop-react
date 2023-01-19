import './App.css';

import { FaFacebook } from "react-icons/fa";


const Tailwinproject = () => {
  return (
    <>
    <FaFacebook style={{ color: "red"}} />
    
    <div className="flex flex-col sm:flex-row h-64">
      <div className="bg-amber-200 h-64 md:w-1/3">Left</div>
      <div className="bg-sky-200 h-61 md:w-2/3">Right</div>
      <div className="-mt-3 text-red-700 text-4xl float-left">
            <FaFacebook /></div>
    </div>
    
    </>
  );
};

export default Tailwinproject;