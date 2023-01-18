import Product from "./Product";

const products = [
  {
    image:
      "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/t/h/th-iphone_12_pro_max_pacific_blue_pdp_image_position-1a.jpg",
    name: "Iphone 12 Pro Max",
    description: "Iphone 12 อะไรวะเนี่ย เหมือนจะงง แต่ไม่งง เกือบจะเข้าใจ",
    price: "22,000 baht",
  },
  {
    image:
      "https://ben.com.vn/tin-tuc/wp-content/uploads/2022/05/macbook-air-m1-avt.jpg",
    name: "MacBook M1",
    description: "ราคาถูกยิ่งกว่าผักที่บ้านก็ MacBook M1 นี่แหละครับบ",
    price: "25,000 baht",
  },
  {
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_TH?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371891077",
    name: "Apple Watch Ultra",
    description: "นาฬิกาที่จมน้ำแล้วยังใช้ในถ้าเอาขึ้นทัน จมไปเลย60เมตร",
    price: "29,000 baht",
  },
  {
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1667594383218",
    name: "iPad Pro Max 48",
    description: "ถูกยิ่งกว่า Ultra Watch ก็ iPad นี่แหละครับ",
    price: "25,000 baht",
  },
];

const Shop = () => (
  <div className="grid gap-2 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <div className="grid gap-2 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2"></div> */}
    {products.map((data) => (
      <Product data={data} />
    ))}
  </div>
);
export default Shop;
