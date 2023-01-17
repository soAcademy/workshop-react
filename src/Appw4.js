import Product from "./Product.js";
function App() {
  return (
    <>
      <div className="w-full grid gap-2 sm:grid-cols md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Product />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </>
  );
}

export default App;
