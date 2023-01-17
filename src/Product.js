const Product = () => (
  <div class="bg-slate-700 mt-4 p-4 rounded-md">
    <div>
      <img
        className="w-full rounded-md"
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559"
      />
    </div>
    <div>
      <h1 className="text-xl text-white mt-4 font-bold">Iphone Pro Max</h1>
    </div>
    <p className="text-gray-300 mt-2">Lorem ......</p>
    <div className="text-right text-amber-500 text-xs ml-4">23,500 บาท</div>

    <div className="mt-2 w-full flex">
      <button className="w-3/4 mx-auto text-center rounded-md bg-blue-300 hover:bg-blue-400 active:bg-amber-400 py-2">
        Buy Now
      </button>
    </div>
  </div>
);

export default Product;