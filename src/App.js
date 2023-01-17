import Product from "./Product";

const App = () => {
  return (
    <>
      <h1 className="w-full text-center p-4 bg-black text-gray-200 text-2xl font-bold">
        Welcome to the shop
      </h1>
      <div className="w-full grid gap-2 place-items-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default App;

/*
Quiz 1

<div className="text-red-700 text-3xl font-bold underline">
        Hello World
      </div>

      <div className="w-24 h-38 bg-blue-500">w-24</div>

      <div className="w-1/2 h-38 bg-yellow-300 rounded">w-1/2</div>

      <div>
        <button className="w-24 bg-green-200 hover:bg-green-800">
          Button 1
        </button>
      </div>

      <div>
        <button className="w-36 bg-red-200 active:bg-red-500 focus:ring focus:ring-red-800">
          Button 2
        </button>
      </div>
*/

/*
Quiz 2

<div className="w-1/6 bg-slate-800 mt-4 p-4 rounded-md ml-4">
        <img className="w-full rounded-md" src="iphone14.jpeg" alt="" />
        <h1 className="text-white text-xl font-bold mt-8">
          THE NEW : IPHONE15 2023
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          lorem ............................. lorem
          .............................lorem .............................lorem
          .............................
        </p>
        <div className="text-right text-amber-600 mt-2 text-sm italic">
          25,900 THB
        </div>
        <button className="bg-blue-500 text-white w-full p-2 mt-2 rounded-md text hover:bg-blue-700 active:bg-amber-500">
          Add to cart
        </button>
      </div>
*/
