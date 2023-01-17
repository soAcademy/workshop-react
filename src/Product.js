const Product = () => {
  return (
    <>
      <div className="w-3/4 bg-slate-800 mt-4 mb-4 p-4 rounded-md ml-4">
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
    </>
  );
};

export default Product;
