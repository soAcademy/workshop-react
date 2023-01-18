import Product from "./Product";
import logo from './logo-1.jpg'
import jsonData from './product.json'

const Shop = () => {
  const products = jsonData.products;
  // const products = [
  //   {
  //     image: logo,
  //     name:  "The New Iphone 14 Pro",
  //     price: "$1099",
  //   },
  //   {
  //     image:
  //       "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066730601",
  //     name: "Ipad Air 2022",
  //     price: "$699",
  //   },
  //   {
  //     image:
  //       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg",
  //     name: "Mac Book Air 2022",
  //     price: "$1599",
  //   },
  //   {
  //     image:
  //       "https://www.apple.com/v/airpods-pro/g/images/meta/og__eui2mpgzwyaa_overview.png",
  //     name: "Airpod Pro 2022",
  //     price: "$299",
  //   },
  // ];
  return (
    <div className="grid grid-cols-3 space-x-2">
      {products.map((data) => (
        <Product data={data} />
      ))}
    </div>
  );
};

export default Shop;
