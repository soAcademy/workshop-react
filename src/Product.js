const Product = ({data}) => (
  
  <div className="max-w-sm rounded-xl border bg-emerald-800 ">
  <img className="p-4 border object-cove "  src={data.image} alt="toylego" />
  <div className="p-5">
  <h1 className="font-bold text-2xl text-white">
  {data.name}
  </h1>
  <p className="pt-2 text-md text-gray-400">
  {data.description}
  </p>
  <p className="pt-2 pb-2 italic text-md text-right text-yellow-300 underline ">
  {data.price}
  </p>
  <button className="w-full pt-2 pb-2 text-md rounded-none font-medium text-white 
 bg-teal-400 rounded-lg hover:bg-yellow-400 shadow">
  Add to Cart
  </button>
  </div>
  </div>
 )
 
 export default Product



