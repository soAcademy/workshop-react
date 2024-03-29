import ProductComponent from "./Product";
import jsonData from "./products.json";

const Shop = () => {
  // console.log(jsonData);
  const products = jsonData.products;

  const jsonStr = '{"products":[{"image":"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559","name":"IPhone Pro Max","description":"IPhone ...","price":"23,500 บาท"},{"image":"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TH_LANG_TH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359560","name":"Macbook","description":"Mac....","price":"43,000 บาท"},{"image":"https://th.canon/media/image/2021/02/18/7ee598480e9c47bab6eba33c7df37bfb_Professional+Photo+Printers.png","name":"Canon Printer","description":"Canon...","price":"1,250 บาท"},{"image":"https://static.siamtv.com/media/catalog/product/cache/ac5899292bba0d707f548a520a8c41b3/R/E/REFR-HAI-THM18NS_3_221219_220354.jpeg","name":"ตู้เย็น Samsung","description":"Samsung...","price":"7,250 บาท"}]}'
  const strToJson = JSON.parse(jsonStr)
  const jsonToStr = JSON.stringify(products)
  console.log(strToJson)
  console.log(jsonToStr)
  // JSON.parse,
  // JSON.stringify,
  // const products = [
  //   {
  //     image:
  //       "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559",
  //     name: "IPhone Pro Max",
  //     description: "IPhone ...",
  //     price: "23,500 บาท",
  //   },
  //   {
  //     image:
  //       "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TH_LANG_TH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359560",
  //     name: "Macbook",
  //     description: "Mac....",
  //     price: "43,000 บาท",
  //   },
  //   {
  //     image:
  //       "https://th.canon/media/image/2021/02/18/7ee598480e9c47bab6eba33c7df37bfb_Professional+Photo+Printers.png",
  //     name: "Canon Printer",
  //     description: "Canon...",
  //     price: "1,250 บาท",
  //   },
  //   {
  //     image:
  //       "https://static.siamtv.com/media/catalog/product/cache/ac5899292bba0d707f548a520a8c41b3/R/E/REFR-HAI-THM18NS_3_221219_220354.jpeg",
  //     name: "ตู้เย็น Samsung",
  //     description: "Samsung...",
  //     price: "7,250 บาท",
  //   },
  // ];

  return (
    <div className="grid grid-cols-3 space-x-2">
      {/* <ProductComponent data={products[0]} />
      <ProductComponent data={products[1]} />
      <ProductComponent data={products[2]} />
      <ProductComponent data={products[3]} /> */}
      <ProductComponent data={products[1]} />
      {products.map((data) => (
        <ProductComponent data={data} var1={"hello world"} />
        // Product(data)
      ))}

    </div>
  );
};

// addNumber(3, 5);
// object = {}
// array = []
// arrayOfObject = [{}, {}, {}]

// object = {
//   name: 'Bin',
//   location: 'Bangkok',
// }

// array = ['Bin', 'Ploy', 'Jam']

// arrayOfObject = [
//   {
//     name: 'Bin',
//     location: 'Bangkok',
//   },
//   {
//     name: 'Jam',
//     location: 'Nonthaburi',
//   },
//   {
//     name: 'Ploy',
//     location: 'Sukhothai'
//   }
// ]

// objectOfArray = {key1: [], key2: [], key3: []}
// objectOfArray = {
//   name: ['Bin', 'Ploy', 'Jam'],
//   location: ['Bangkok', 'Nonthaburi', 'Sukhothai'],
//   count: 3
// }

export default Shop;
