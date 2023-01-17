function App() {
  return (
    <>
      //Q1
      <div className="text-red-700 font-bold text-3xl ">Hello world</div>
      //Q2
      <div className="w-24 bg-blue-500 h-38">Hello world</div>
      <div className="w-1/2 h-38 bg-yellow-300 rounded-lg">Hello World</div>
      //Q3
      <div>
        <button className="w-24 bg-green-200 hover:bg-green-800 rounded-full mr-2">
          Button 1
        </button>
      </div>
      <div>
        <button className="w-36 bg-red-200 focus:outline-none hover:bg-red-500 focus:ring focus:ring-red-800 mt-2 rounded-full">
          Button 2
        </button>
      </div>
    </>
  );
}

export default App;
