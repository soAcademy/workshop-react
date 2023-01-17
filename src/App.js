// import logo from "./logo.svg";
// import "./App.css";
// import "./my-style.css";
// import "./tailwind.css";
// import myStyleModule from "./my-style.module.css";
// import Header from "./Header";
// import { Header2, Header3 } from "./Header2";
import ProductCard from "./ProductCard";

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
      <div className="bg-gray-800 text-gray-50 px-4 py-6 text-2xl font-bold text-center">
        Welcome to Apple
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-gray-500">
        {[...Array(8).keys()].map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}

export default App;
