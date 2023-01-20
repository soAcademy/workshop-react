// import macbookImage from "./images/apple-business-computer-design-5ebcfbd7be0a9712978db57eb36df918.jpg";

const ProductCard = ({ product }) => (
  <div className="rounded-lg bg-gray-800 p-4 text-gray-400">
    <img
      alt={product.name}
      // src="https://via.placeholder.com/640x480.png?text=Macbook+Pro+2040"
      src={product.image}
    />
    <h1 className="my-4 text-2xl font-bold text-white">{product.name}</h1>
    <p className="my-4">{product.description}</p>
    <div className="my-4 text-right text-sm italic text-red-500">
      THB {product.price.toLocaleString()}
    </div>
    <button className="h-8 w-full bg-blue-900 text-white hover:bg-blue-600">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
