const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
