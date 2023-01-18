
const Product = ({data}) => {
  return (
    <>
      <div className="w-full bg-gray-500 mt-5 p-2 rounded-lg">
        <div>
          <img
            className="p-3 rounded"
            src={data.picture}
          />
        </div>
        <h1 className="text-xl text-white bg-white-100 text-center font-bold mt-2 underline">
          {data.name}
        </h1>
        <p className="text-center text-md mt-2">{data.description}</p>
        <p className="text-right text-xs text-red-100 mt-2">
          {data.price}
        </p>
        <div>
          <button className="rounding-md w-full h-1/2 bg-green-200 hover:bg-blue-100 active:bg-yellow-100 rounded-md mt-2">
            Love!!
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;