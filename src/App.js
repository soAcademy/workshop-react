// import logo from "./logo.svg";
// import "./App.css";
// import "./my-style.css";
// import "./tailwind.css";
// import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";
import macbookImage from "./images/apple-business-computer-design-5ebcfbd7be0a9712978db57eb36df918.jpg";

function App() {
  const myCV = {
    firstName: "John",
    lastName: "Johnson",
  };

  const { firstName, lastName } = myCV;

  return (
    // <div>
    //   <div className="flex flex-row h-screen">
    //     <div className="basis-1/4 bg-indigo-500 p-4 text-left">
    //       <h2 className="text-xl">About Me</h2>
    //     </div>
    //     <div className="basis-3/4 p-4 text-left">
    //       <h1 className="text-2xl">
    //         {firstName} {lastName}
    //       </h1>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <h1 className="text-3xl font-bold underline">Hello World!</h1>
    //   <p className="font-serif">Hello typography!</p>
    //   <p className="text-sm">Hello typography!</p>
    //   <p className="italic">Hello typography!</p>
    //   <p className="italic font-bold">Hello typography!</p>
    //   <p className="italic font-bold text-right">Hello typography!</p>
    //   <p className="font-semibold text-indigo-500 text-xl">Hello typography!</p>
    //   <div className="bg-pink-500">Hello spacing!</div>
    //   <div className="bg-red-500 px-4">Hello spacing!</div>
    //   <div className="bg-orange-500 mx-4">Hello spacing!</div>
    //   <div className="bg-amber-500 pt-4">Hello spacing!</div>
    //   <div className="bg-yellow-500 mt-4">Hello spacing!</div>
    //   <div className="bg-green-500 p-4 m-4">Hello spacing!</div>
    //   <div class="flex space-x-4 bg-slate-500 p-4">
    //     <div className="bg-blue-500">Hello spacing!</div>
    //     <div className="bg-indigo-500">Hello spacing!</div>
    //     <div className="bg-violet-500">Hello spacing!</div>
    //   </div>
    //   <div className="bg-pink-500 w-24">Hello sizing!</div>
    //   <div className="bg-red-500 w-48">Hello sizing!</div>
    //   <div className="bg-orange-500 w-2/3">Hello sizing!</div>
    //   <div className="bg-amber-500 w-12 h-12">Hello sizing!</div>
    //   <div className="bg-yellow-500 w-12 h-12 rounded-sm">Hello sizing!</div>
    //   <div className="bg-green-500 w-12 h-12 rounded-md">Hello sizing!</div>
    //   <div className="bg-blue-500 w-12 h-12 rounded-2xl">Hello sizing!</div>
    //   <div className="bg-indigo-500 w-12 h-12 rounded-full">Hello sizing!</div>
    //   <div className="bg-violet-500 w-64 h-12 rounded-full">Hello sizing!</div>
    //   <button className="bg-pink-500 m-4 w-36 h-12 text-center rounded-full border-2 border-dashed border-blue-500 hover:bg-rose-500">
    //     Hello button!
    //   </button>
    // </div>
    <div>
      {/* <div className="text-red-700 text-3xl font-bold underline">
        Hello world
      </div>
      <div className="w-24 h-38 bg-blue-500">w-24</div>
      <div className="w-1/2 h-38 bg-yellow-300 rounded-lg">w-1/2</div>
      <button className="w-24 bg-green-200 hover:bg-green-800">Button 1</button>
      <button className="w-36 bg-red-200 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-800">
        Button 2
      </button> */}
      <div className="w-64 p-4 bg-gray-800 text-gray-400 m-4 rounded-lg">
        <img
          alt="Macbook Pro 2040"
          // src="https://via.placeholder.com/640x480.png?text=Macbook+Pro+2040"
          src={macbookImage}
        />
        <h1 className="text-2xl text-white font-bold my-4">
          The New Macbook Pro 2040
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna
          sed arcu aliquet, in cursus sapien bibendum.
        </p>
        <div className="text-red-500 text-sm my-4 text-right italic">
          THB 24,900
        </div>
        <button className="w-full h-8 bg-blue-900 hover:bg-blue-600 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
