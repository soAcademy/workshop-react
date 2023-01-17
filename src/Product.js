const Product = () => {
  const detail = {
    pName: `New! Cute Teddy Doll`,
    pDescription: `Teddy Bear White color.....`,
    pPrice: `399.00`,
  };
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-700">Hello World</h1>
      <div className="flex my-4">
        <div className="w-24 h-38 bg-sky-500 text-center">w-24</div>
        <div className="w-1/2 h-38 bg-amber-500 rounded-lg text-center">
          w-1/2
        </div>
      </div>

      <button className="w-24 bg-green-200 hover:bg-green-800 active: rounded-xl">
        Button 1
      </button>
      <button
        className="w-36 bg-red-200 hover:bg-red-300 active:bg-red-500 focus:outline-none
focus:ring focus:ring-red-800 rounded-xl"
      >
        Button 2
      </button>

      <div className="pb-64"></div> */}
      <div className="p-5 m-2 max-w-sm rounded-xl border bg-gray-700 shadow-xl">
        <img className="w-full rounded-xl" src="gorilla.jpg" />
        <div className="mt-5">
          <h5 className="font-bold text-2xl text-white">{detail.pName}</h5>
          <p className="pt-2 text-md text-gray-400">{detail.pDescription}</p>
          <p className="pt-2 pb-2 italic text-sm text-right text-yellow-400">
            ฿{detail.pPrice}
          </p>
          <div className="flex">
            <button
              className="mx-auto w-64 pt-2 pb-2 text-md rounded-xl font-medium text-white
bg-red-600 rounded-full hover:bg-red-500"
            >
              Buy Now !
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
