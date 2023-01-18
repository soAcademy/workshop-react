import React from "react";
const ProductCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="bg-gray-300 w-[300px] h-[400px] rounded-[20px] mt-[30px]">
      <div className="w-full ml-[50px] pt-[30px] ">
        <img className="w-[200px] h-[200px]" src={data.image}></img>
      </div>
      <div className="ml-[200px] pt-[40px] pb-[20px] space-x-6 ">
        <span className="pr-[40px] text-[20px]"> {data.name} </span>
        <span className="text-red-500">{data.price}</span>
      </div>
      <div className="w-full ml-[100px]">
        <button className="w-[100px] h-[40px] bg-gray-600 text-white hover:bg-green-500 hover:text-white rounded-[10px]">
          buy now !
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
