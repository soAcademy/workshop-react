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
      <div class="w-1/3 bg-gray-500 mt-4 p-1 rounded-md">
        <div>
          <h1 className="text-xl text-white mt-4 font-bold">
            Condo for sale near Ari BTS station
          </h1>
        </div>
        <p className="text-gray-300 mt-2">Best Location, Best Price</p>
        <div>
          <img
            className="w-full rounded-md"
            src="https://www.edinarealty.com/media/3678/difference-between-condo.jpg?mode=crop&width=800&height=540"
          />
        </div>

        <div className="flex">
          <div className="w-1/2">
            <button className="w-3/4 rounded-md bg-white hover:bg-blue-400 active:bg-yellow-400 py-2 mt-2">
              Buy Now
            </button>
          </div>

          <div className="w-1/2 text-right text-yellow-500 text-xl py-2 mt-2">
            2,300,500 บาท
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
