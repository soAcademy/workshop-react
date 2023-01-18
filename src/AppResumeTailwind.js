// import "./App.css";
import profile from "./profile.jpg";
import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";

export const AppResumeTailwind =() => {
  const info = {name: "Tailwind", profile: "Tailwind"}
  return (
    <>
      <div className="h-16 bg-green-300 fixed w-full shadow-md">Nav Bar</div>
      <div className="flex flex-col sm:flex-row pt-16">
        <div className="sm:w-1/3 bg-amber-200 py-4">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src= {profile}
          />
          <div className="text-center mt-2 bg-red-300">
            <span className="font-bold bg-blue-200 float-left">
              {info.name}
            </span>
            <FaAngellist className="text-green-500 text-4xl" />
          </div>
          <div>
            {info.name} {info.profile}
          </div>
        </div>
        <div className="sm:w-2/3 bg-red-200">Right Panel</div>
      </div>
    </>
  );
}

export default AppResumeTailwind
