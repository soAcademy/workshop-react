// import macbookImage from "./images/apple-business-computer-design-5ebcfbd7be0a9712978db57eb36df918.jpg";

const ProductCard = ({ product }) => (
  <div className="p-4 bg-gray-800 text-gray-400 rounded-lg">
    <img
      alt={product.name}
      // src="https://via.placeholder.com/640x480.png?text=Macbook+Pro+2040"
      src={product.image}
    />
    <h1 className="text-2xl text-white font-bold my-4">{product.name}</h1>
    <p className="my-4">{product.description}</p>
    <div className="text-red-500 text-sm my-4 text-right italic">
      THB {product.price.toLocaleString()}
    </div>
    <button className="w-full h-8 bg-blue-900 hover:bg-blue-600 text-white">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
