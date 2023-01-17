import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { Header2, Header3 } from "./header2";
import "./App-3.css";
import pic1 from "./squirrel.jpg";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-700">Hello World</h1>
      <div className="flex my-4">
        <div className="w-24 h-38 bg-sky-500 text-center">w-24</div>
        <div className="w-1/2 h-38 bg-amber-500 rounded-lg text-center">
          w-1/2
        </div>
      </div>

      <button className="w-24 bg-green-200 hover:bg-green-800 rounded-xl">
        Button 1
      </button>
      <button
        className="w-36 bg-red-200 hover:bg-red-300 active:bg-red-500 focus:outline-none
focus:ring focus:ring-red-800 rounded-xl"
      >
        Button 2
      </button>

      <div className="pb-64"></div>
    </>
  );
};

export default App;
