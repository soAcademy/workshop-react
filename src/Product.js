const Product = ({data}) => (
  <div class="bg-red-700 mt-4 p-4 rounded-md shadow-xl">
    <div>
      <img
        className="w-full rounded-md"
        src={data.image}
      />
    </div>
    <div>
      <h1 className="text-xl text-white mt-4 font-bold">{data.name}</h1>
    </div>
    <p className="text-gray-300 mt-2">{data.description}</p>
    <div className="text-right text-amber-500 text-xs ml-4">{data.price}</div>

    <div className="mt-2 w-full flex font-prompt">
      <button className="w-3/4 mx-auto text-center rounded-md bg-blue-300 hover:bg-blue-400 active:bg-amber-400 py-2 shadow">
        Buy Now
      </button>
    </div>
  </div>
);

export default Product;