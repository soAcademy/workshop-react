import Product from "./Product";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello World!
      </h1>
      ;
      <div>
        <div className="w-24 h-38 bg-blue-500">W-24</div>
        <div className="w-1/2 h-38 bg-yellow-300 rounded-lg">W-1/2</div>
      </div>
      <button className="w-24  bg-green-200 hover:bg-green-800 ">
        Button 1
      </button>
      <button
        className="w-36  bg-red-200 active:bg-red-500 focus:outline-none
focus:ring focus:ring-red-800"
      >
        Button 2
      </button>
      <div className="grid gap-2 grid-cols md:grid-cols-2 lg:grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default App;
