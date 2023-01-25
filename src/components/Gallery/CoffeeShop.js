import axios from "axios";
import React, { useState, useEffect } from "react";

const CoffeeShop = () => {
  const [data, setData] = useState("");
  const fetch = () => {
    setData("");
    axios({
      method: "get",
      url: `https://api.sampleapis.com/coffee/hot`,
    }).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    setData("");
  }, []);

  return (
    <div className="p-8 m-2 bg-gray-300 w-11/12 rounded-lg mx-auto">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold">Coffee Shop Menu</p>
        <button
          onClick={fetch}
          className="p-2 m-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
        >
          Fetch
        </button>
      </div>
      <div className={data!== "" ? "opacity-100 duration-500" : "opacity-0"}>
        <table className="table-auto border-separate border-spacing-x-1">
          <thead className="font-bold">
            <tr className={`border-2 border-black ${ data!=="" ? "visible sticky top-10 bg-gray-400" : "hidden"} `}>
              <th className="border-2 border-black">Menu</th>
              <th className="border-2 border-black w-1/2">Description</th>
              <th className="border-2 border-black">Ingredient</th>
              <th className="border-2 border-black">Image</th>
            </tr>
          </thead>
          <tbody>
            {data !== "" &&
              data?.map((e) => {
                const ingredients = e.ingredients;
                return (
                  <tr>
                    <td className="border-2 border-black" align='center'>{e.title}</td>
                    <td className="border-2 border-black">{e.description}</td>
                    <td className="border-2 border-black">
                      <ul type="disc">
                        {ingredients.map((g) => {
                          return <li>• {g}</li>;
                        })}
                      </ul>
                    </td>
                    <td className="border-2 border-black">
                      <img src={e.image} className="cover"></img>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoffeeShop;
