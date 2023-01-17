const App = () => {
  return (
    <>
      <p className="text-base">Hello World!</p>
      <p className="text-lg">Hello World</p>
      <p className="text-xl">Hello World</p>
      <p className="text-3xl">Hello World</p>
      <p className="text-red-100">Hello World</p>
      <p className="text-red-500">Hello World</p>
      <p className="text-red-900">Hello World</p>
      <p className="text-yellow-500">Hello World</p>
      <p className="text-primary">Hello World</p>
      <p className="text-secondary">Hello World</p>
      <p className="text-gray-400">Hello World</p>
      <p className="text-black">Hello World</p>
      <p className="text-center">Hello World</p>
      <p className="text-right">Hello World</p>
      <p className="text-left">Hello World</p>
      <p className="text-black">Hello World</p>
      <p className="font-bold">Hello World</p>
      <p className="font-semibold">Hello World</p>
      <p className="font-light">Hello World</p>
      <p className="italic">Hello World</p>
      <p className="underline">Hello World</p>
      <p className="text-green-300 text-center font-bold underline italic">
        Hello World
      </p>
      <div className="bg-yellow-300">Hello World</div>
      <div className="bg-red-300 pt-4">Hello World</div>
      <div className="bg-green-300 mt-4">Hello World</div>
      <div className="bg-blue-300 ml-4">Hello World</div>
      <div className="bg-purple-300 pl-4">Hello World</div>
      <div className="bg-amber-300 text-right mr-4">Hello World</div>
      <div className="bg-cyan-300 text-right pr-4">Hello World</div>
      <div className="bg-red-400 py-4">Hello World</div>
      <div className="bg-yellow-400 pb-4">Hello World</div>
      <div className="bg-orange-400 p-4">Hello World</div>
      <div className="bg-green-400 m-4">Hello World</div>
      <div className="flex bg-blue-400 space-x-16">
        <div className="bg-red-400">Hello World</div>
        <div className="bg-orange-400">Hello World</div>
        <div className="bg-gray-400">Hello World</div>
      </div>

      <div className="w-24 bg-red-700">Hello World</div>
      <div className="w-32 bg-yellow-700">Hello World</div>
      <div className="w-3/12 bg-blue-300">Hello World</div>
      <div className="w-1/2 bg-green-300">Hello World</div>
      <div className="w-1/3 bg-cyan-300">Hello World</div>
      <div className="w-3/4 bg-amber-300">Hello World</div>
      <div className="w-3/5 bg-yellow-300">Hello World</div>
      <div className="w-full bg-red-300">Hello World</div>
      <div className="bg-green-300 m-4 p-4 rounded">Hello World</div>
      <div className="bg-red-300 m-4 p-4 rounded-lg">Hello World</div>
      <div className="bg-yellow-300 m-4 p-4 rounded-xl">Hello World</div>
      <div className="bg-blue-300 m-4 p-4 rounded-full">Hello World</div>
      <div className="bg-purple-300 w-20 m-4 p-4 rounded-full">Hello World</div>
      <div className="bg-green-300 h-8">Hello World</div>
      <div className="bg-red-300 h-24">Hello World</div>
      <div className="bg-blue-300 h-32">Hello World</div>
      <div className="bg-gray-300 h-screen">Hello World</div>
      <div className="bg-green-300 w-screen">Hello World</div>

      <div className="w-64 bg-red-700 m-4">
        Hello World
        <div className="w-full bg-yellow-300">Hello World</div>
        <div className="w-screen bg-green-300">Hello World</div>
      </div>

      <div className="w-64 bg-red-700 rounded-lg">
        <div className="w-2/3 bg-green-300 rounded-full p-4">Hello World</div>
      </div>

      <div className="w-64 bg-gray-300 border-2 border-rose-300 border-dotted mt-4 py-2 text-center rounded-full">
        Hello World
      </div>

      <button className="w-64 p-4 rounded-full bg-sky-600 hover:bg-sky-400 active:bg-red-300">
        Hello World
      </button>
      <div className="bg-red-300 md:bg-red-500 lg:bg-red-700 m-4">
        Hello World
      </div>
      <button className="w-12 md:w-24 lg:w-36 p-4 rounded-full bg-sky-600 hover:bg-sky-400 active:bg-red-300">
        Hello World
      </button>
      <div className="flex bg-red-200 mt-2">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 bg-green-300">Hello World</div>
        <div className="w-1/2 md:w-2/3 lg:w-3/4 bg-yellow-300">Hello World</div>
      </div>
      <div class="w-1/3 bg-slate-700 mt-4 p-4 rounded-md">
        <div>
          <img
            className="w-full rounded-md"
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559"
          />
        </div>
        <div>
          <h1 className="text-xl text-white mt-4 font-bold">Iphone Pro Max</h1>
        </div>
        <p className="text-gray-300 mt-2">Lorem ......</p>
        <div className="text-right text-amber-500 text-xs">23,500 บาท</div>
        <div>
          <button className="w-full rounded-md bg-blue-300 hover:bg-blue-400 active:bg-amber-400  py-2 mt-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="pb-64"></div>
    </>
  );
};
// t (top), b (bottom), l (left), r (right), y (top and bottom), x (left and right)
export default App;
// xs, sm, base, md, lg, xl, 2xl
