const Product = ({data}) => (
  <div class="w-full bg-gray-500 mt-4 p-1 rounded-md">
    <div>
      <h1 className="text-xl text-white mt-2 font-bold">
        {data.name}
      </h1>
    </div>
    <p className="text-gray-300 mt-2">Best Location, Best Price</p>
    <div>
      <img
        className="w-full rounded-md"
        src={data.image}
      />
    </div>

    <div className="flex">
      <div className="w-1/2">
        <button className="w-3/4 rounded-md bg-white hover:bg-blue-400 active:bg-yellow-400 py-2 mt-2">
          Buy Now
        </button>
      </div>

      <div className="w-1/2 text-right text-yellow-500 text-xl py-2 mt-2">
      {data.price}
      </div>
    </div>
  </div>
);
export default Product;