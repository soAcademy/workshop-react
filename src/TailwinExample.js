import Product from "./Shop.js";

const TailwindExample = () => {
  return (
    <div className="text-xl bg-gray-800 overflow-hidden">
      <p className="border-2 border-dotted border-rose-500 bg-red-200 w-1/3 rounded-lg italic underline">
        italic underline
      </p>
      <p className="text-red-700 border-2 border-red-900 w-1/6">center</p>
      <p className="text-5xl">text-5xl</p>
      <p className="text-red-600">text-red-600</p>
      <p className="font-bold">font-bold</p>
      <hr className="border-grey-600 my-4"></hr>
      <p className="pt-2 pb-2 pl-2 border-2">pt-2 pb-2 pl-2</p>
      <p className="py-2 border-2 w-2/12 text-center bg-red-300">
        py-2 (top/bot)
      </p>
      <p className="px-2 border-2 w-2/12 text-center bg-yellow-300">
        px-2 (left/right)
      </p>
      <p className="p-2 border-2 w-2/12 text-center bg-green-300">p-2 (all)</p>
      <hr className="border-grey-600 my-4"></hr>
      <p className="mt-2 mb-2 ml-2 mr-2 border-2 bg-red-300">
        mt-2 mb-2 ml-2 mr-2
      </p>
      <p className="mx-4 border-2 bg-green-300">mx-4</p>
      <p className="my-4 border-2 bg-yellow-300">my-4</p>
      <hr className="border-grey-600 my-4"></hr>
      <div className="flex space-x-10 space-y-4 border-2">
        <p>flex space-x-10 space-y-4</p>
        <p>flex space-x-10 space-y-4</p>
      </div>
      <hr className="border-grey-600 my-4"></hr>
      <p className="h-12 w-36 flex items-center justify-center bg-red-500 mt-4">
        w-36 h-12
      </p>
      <p className="w-1/3 bg-green-500 text-center">w-1/3</p>
      <p className="w-full bg-yellow-500 text-center">w-full</p>
      <hr className="border-grey-600 my-4"></hr>
      <p className="rounded-xl bg-blue-500 w-1/4 text-center mt-4">
        rounded-xl
      </p>
      <p className="rounded-md bg-pink-300 w-1/4 text-center">rounded-md</p>
      <p className="rounded-full w-36 h-36 bg-blue-300 flex items-center justify-center text-center ">
        rounded-full
      </p>
      <hr className="border-grey-600 my-4"></hr>
      <p className="border-2 border-red-300 text-center mt-4">border-2</p>
      <p className="border-8 border-red-300 text-center">border-8</p>
      <hr className="border-grey-600 my-4"></hr>
      <div className="w-1/3 border-4 border-yellow-400 bg-blue-200 text-center my-4">
        div-w-1/3
        <p className="w-full bg-red-300 text-center">w-full</p>
        <p className="w-screen bg-green-300 text-center">w-screen</p>
      </div>
      <hr className="border-grey-600 my-4"></hr>
      <p className="border-2 border-rose-600 text-center w-1/3">
        border-2 border-rose-600
      </p>
      <p className="border-2 border-dotted border-rose-600 text-center w-1/3">
        border-2 border-dotted
      </p>
      <p className="border-4 border-double border-rose-600 text-center w-1/3">
        border-4 border-double
      </p>
      <hr className="border-grey-600 my-4"></hr>
      <button className="w-20 bg-red-300 rounded-lg m-2 hover:bg-red-500 text-white">
        hover
      </button>
      <button className="w-20 bg-red-300 rounded-lg m-2 focus:bg-red-500 text-white">
        focus
      </button>
      <button className="w-20 bg-red-300 rounded-lg m-2 cursor-grab active:bg-red-500 active:cursor-grabbing text-white">
        active
      </button>
      <hr className="bg-grey-600 my-4" />
      <h2 className="text-center font-bold text-4xl text-black bg-red-500 w-1/2 mx-40">
        Tailwind CSS Workshop #2
      </h2>
      <p className="underline text-black bg-gray-400 my-2 w-full">
        {" "}
        Question 1: text-red-700 text-3xl font-bold underline
      </p>
      <p className="text-red-700 font-bold text-3xl underline">Hello</p>
      <p className="underline text-black bg-gray-400 my-2">
        Question 2: div1=w-24" w-34 h-38 bg-blue-500 div2="w-1/2" w-1/2 h-38
        bg-amber-300 border
      </p>
      <div className="w-24 h-38 bg-blue-500 text-center text-white">w-24</div>
      <div className="w-1/2 h-38 bg-amber-300 border-2 border-black text-center">
        w-1/2
      </div>
      <p className="underline text-black bg-gray-400 my-2 w-full">
        {" "}
        Question 3: button1="Button1" h-24 w-24 bg-emerald-200
        hover:bg-emerald-800 button2="Button 2" h-36 w-36 bg-red-200
        active:bg-red-500 focus:border-red-800
      </p>

      <button className="h-24 w-24 bg-emerald-200 hover:bg-emerald-800 rounded-lg text-black m-2">
        Button 1
      </button>
      <button className="h-36 w-36 bg-red-200 active:bg-red-500 focus:border-2 focus:border-red-800 rounded-lg text-black m-2">
        Button 1
      </button>
      <hr className="border-grey-600 my-4" />
      <h2 className="text-center font-bold text-4xl text-black bg-red-500 w-1/2 mx-40">
        Tailwind CSS Workshop #3
      </h2>
      <p className="underline text-black bg-gray-400 my-2 w-full">
        Create Product Card Component
      </p>
      {/* <div className="m-6 max-w-xs bg-gray-700 rounded-lg ">
        <div className="flex justify-center relative -top-2">
          <p className="p-1 w-2/5 bg-blue-500 rounded-md text-white text-center">
            Traveling
          </p>
        </div>
        <div className="p-4 ">
          <img
            className="rounded"
            src="https://plus.unsplash.com/premium_photo-1668181103252-352173f7ada7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
            alt="img.jpg"
          ></img>
        </div>
        <div className="p-4">
          <h4 className=" text-white font-bold text-xl">
            TRIP : Somewhere in the world only we know
          </h4>
          <p className="pt-2 text-gray-400 text-base">
            Trip to somewhere in the world only we know Lorem ipsum dolor sit
            amet consectetur adipisicing elit. est perferendis!
          </p>
          <p className="py-2 text-red-400 italic text-base text-right">
            $1999.99
          </p>
          <button className="h-10 w-full bg-blue-600 rounded text-white text-base hover:bg-blue-500 active:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div> */}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {/* <div className="grid grid-cols-4 overflow-x-scroll"> */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default TailwindExample;
