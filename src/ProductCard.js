import macbookImage from "./images/apple-business-computer-design-5ebcfbd7be0a9712978db57eb36df918.jpg";

const ProductCard = () => (
  <div className="p-4 bg-gray-800 text-gray-400 rounded-lg">
    <img
      alt="Macbook Pro 2040"
      // src="https://via.placeholder.com/640x480.png?text=Macbook+Pro+2040"
      src={macbookImage}
    />
    <h1 className="text-2xl text-white font-bold my-4">
      The New Macbook Pro 2040
    </h1>
    <p className="my-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis
      eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu
      aliquet, in cursus sapien bibendum.
    </p>
    <div className="text-red-500 text-sm my-4 text-right italic">
      THB 24,900
    </div>
    <button className="w-full h-8 bg-blue-900 hover:bg-blue-600 text-white">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
