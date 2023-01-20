import ProductCard from "./ProductCard";
import macbookImage from "./images/apple-business-computer-design-5ebcfbd7be0a9712978db57eb36df918.jpg";
import macMiniImage from "./images/Mac_mini_(2018)_ports.jpg";
import iPhoneImage from "./images/pexels-geometric-photography-11525164.jpg";

const products = [
  {
    name: "The New Macbook Pro 2040",
    price: 24900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
    image: macbookImage,
  },
  {
    name: "The New Mac Mini 2040",
    price: 14900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
    image: macMiniImage,
  },
  {
    name: "The New iPhone 50",
    price: 34900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu felis eget nibh lobortis congue et sed neque. Nullam hendrerit magna sed arcu aliquet, in cursus sapien bibendum.",
    image: iPhoneImage,
  },
];

const ProductPage = () => (
  <>
    <div className="bg-gray-800 px-4 py-6 text-center text-2xl font-bold text-gray-50">
      Welcome to Apple
    </div>
    <div className="grid gap-4 bg-gray-500 p-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  </>
);

export default ProductPage;
