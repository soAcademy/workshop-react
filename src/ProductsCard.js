const ProductsCard = (prop) => {
  return (
    <div className="w-64 h-fit rounded rounded-md bg-slate-800 shadow-lg shadow-gray-500 p-3">
      <div className="">
        <img src={prop.data.img} alt={prop.data.name} />
      </div>
      <div className="mt-4">
        <h1 className="text-white text-xl">{prop.data.name}</h1>
      </div>
      <div className="mt-3">
        <p className="font-thin text-gray-400 text-sm">
          {prop.data.description}
        </p>
      </div>
      <div className="text-right mt-4">
        <p className="text-red-400 italic">{prop.data.price}</p>
      </div>
      <div className="mt-4">
        <button className="w-full h-8 rounded rounded-md bg-blue-700 text-white hover:bg-blue-900 active:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
