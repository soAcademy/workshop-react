const Product = () => {
  return (
    <div className="w-64 h-fit rounded rounded-md bg-slate-800 shadow-lg shadow-gray-500 p-3">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="MacBook"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-white text-xl">The New: MacBook Pro 2040</h1>
      </div>
      <div className="mt-3">
        <p className="font-thin text-gray-400 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div className="text-right mt-4">
        <p className="text-red-400 italic">$10,000</p>
      </div>
      <div className="mt-4">
        <button className="w-full h-8 rounded rounded-md bg-blue-700 text-white hover:bg-blue-900 active:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
