import Product from "./Product";
import jsonData from "./Products.json"


const Shop = () => {
const products = jsonData.products;

  return (
    <div className="grid grid-cols-3 space-x-2">
      {/* <Product data={products[1]} />
      <Product data={products[2]} /> */}
      {products.map((r) => (
        <Product data={r} />
      ))}
    </div>
  );
};

export default Shop;
