import logo from './logo-1.jpg'
import Shop from './Shop'
const Product = ({data}) => {
  return <>
  <div className="m-4 bg-slate-600 rounded-lg ">
    <div>
      <img src={data.image} className=" w-64 h-64 object-cover p-6"></img>
    </div>
    <div className="text-slate-50 text-bold text-3xl text-center">
      {data.name}
    </div>
    <div className="text-sm text-slate-300 p-4 text-center">
      Lorem ipsum dolor sit amet, consectetur adip sed b gdfgtrhyhngfhbrgshtrusryntrumdfuhdrgdrg dfbdfhdfbdf dfbgfbgfnbdfgnfgn xfghgfbgfbdfgb
    </div>
    <div className="text-right text-lg text-red-700 pr-2 ">
      {data.price}
    </div>
    <div className="flex">
      <button className="bg-blue-500 w-3/4 mx-auto p-6 mb-8 hover:bg-blue-800 active:bg-orange-500 rounded-full"  >Add To Cart</button>
    </div>
  </div>

  </>;
}

export default Product;
