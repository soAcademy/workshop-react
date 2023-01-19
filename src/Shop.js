import Product from "./Product";
import jsonData from "./products.json";


const Shop = () => {
  

  // const products = jsonData.products;
  

  // const strToJson = JSON.parse(jsonStr)
  // const jsonToStr = JSON.stringify(products)
  // console.log(strToJson)
  // console.log(jsonToStr)

  // const products = [
    // {
    //   image:
    //     "https://inwfile.com/s-i/mpwwwp.jpg",
    //   name: " LEGO ALIEN CONQUEST 7049 ALIEN STRIKER",
    //   description: "L-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก...",
    //   price: "800 บาท",
    // },
    // {
    //   image:
    //     "https://i.lnwfile.com/_/i/_raw/on/ck/ej.jpg",
    //   name: "Lego superhero 76057 web warrior ultimate bridge battle",
    //   description: "M-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก....",
    //   price: "500 บาท",
    // },
    // {
    //   image:
    //     "https://i.lnwfile.com/_/i/_raw/hh/yi/ge.jpg",
    //   name: "Lego advanced modular 10255 assembly square",
    //   description: "XL-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก...",
    //   price: "17,550 บาท",
    // },
    // {
    //   image:
    //     "https://i.lnwfile.com/_/i/_raw/ws/rf/i6.jpg",
    //   name: "Lego cuusoo 21304 the doctor WHO",
    //   description: "X-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก...",
    //   price: "5,000 บาท",
    // },
    // {
    //   image:
    //     "https://m.media-amazon.com/images/I/A19a0Ksd7rL._AC_SL1500_.jpg",
    //   name: "Lego superhero 76054 scarecrow harvest of fear",
    //   description: "X-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก...",
    //   price: "3,700 บาท",
    // },
    // {
    //   image:
    //     "https://www.lego.com/cdn/cs/set/assets/blt6dd8ce6ed60a6c13/76055_alt5.jpg",
    //   name: "Lego superhero 76055 killer croc sewer smash",
    //   description: "X-Box จำหน่ายของเล่นเด็ก ตัวต่อ เลโก้ ราคาถูก LEGO Brickset ของแท้ ใหม่ในกล่อง เป็นแหล่งรวมเลโก้ทุกรุ่น ทุกแบบ  lovelylego shop มีเลโก้สำหรับเด็กเล็ก อายุ 0-3 ปี, เลโก้สำหรับเด็กโต 3-12 ปี, และเลโก้สำหรับนักสะสมมากมาย อาทิ เช่น Lego Ninjago, Lego City, Lego Friends สำหรับเด็ก...",
    //   price: "4,500 บาท",
    // },
  // ];

  
  return (
    <div className="grid grid-cols-3 space-x-2">
      
      {jsonData.map((r) => (
      <Product data={r} />
      ))}
    </div>
  );
};




export default Shop;