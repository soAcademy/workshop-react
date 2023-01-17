import ProductCard from "./ProductCard";

const ProductPage = () => (
  <>
    <div className="bg-gray-800 text-gray-50 px-4 py-6 text-2xl font-bold text-center">
      Welcome to Apple
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-gray-500">
      {[...Array(8).keys()].map(() => (
        <ProductCard />
      ))}
    </div>
  </>
);

export default ProductPage;
