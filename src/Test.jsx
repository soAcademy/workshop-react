import { useState, useEffect, useRef } from "react";
import React from "react";
import products from "./products.json";
import axios from "axios";

console.log("axios", axios)

const Product = ({ props1, onClick }) => {
  // console.log("Product:1", props)
  // there are 2 keys in props those are no, product
  // const { no, product } = props
  // console.log("product", product)

  

  return (
    <div>
      {/* {props1} */}
      {/* <p>{`[${product.brand}] ${product.description}`}</p> */}
      {/* <p>Price</p> */}
      <button onClick={onClick}>Click me</button>
    </div>
  )
};

const TestDebug = () => {

  const [count, setCount] = useState(0)
  // const textRef = useRef(null)

  // const x = product.map(() => {})

  // console.log("TestDebug", products) // run pass
  // const Product = () => <div>HELLO</div>

  // const ids = products.map((product) => product.id) // [1, 2, 3]
  // const numberIds = ids.map(id => `number-${id}`)
  // const textIds = ids.map(id => `text-${id}`)
  // const productDOMs = products.map((product, i) => (<Product product={product} no={i + 1} />))
  // [
  //    <Product />
  //    <Product />
  //    <Product />
  // ] 

  // Q: Function กับ Component ต่างกันยังไง ?
  // Function = Function ที่ return อะไรก็ได้ที่ไม่ใช่ HTML
  // Component = Function ที่ return เป็น HTML

  // console.log("ids", ids)
  // const renderProducts = products.map((product, i) => (<Product product={product} no={i + 1} />))

  // const handleClick = () => {
  //   console.log("handleClick")
  //   // do whatever you want
  //   setCount(count + 1)
  // }

  // Promise = ES5=then-catch / ES6=async-await

  const handleClick = () => {
    try {
      const { data } = await axios.get('https://api.sampleapis.com/coffee/hot')
      console.log("POND:DEBUG:then", data);
      console.log("AAAAAAAAAAA")
    } catch (error) {
      console.log(error)
    } finally {
      console.log("POND:DEBUG:finally")
    }
    // .then(function ({ data }) {
    //   // handle success
    //   // const data = response.data // array
    //   console.log("POND:DEBUG:then", data);
    //   console.log("AAAAAAAAAAA")
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log("POND:DEBUG:catch", error);
    // })
    // .finally(function () {
    //   // always executed
    //   console.log("POND:DEBUG:finally")
    // });

    // axios.get('https://api.sampleapis.com/coffee/hot')
    // .then(function ({ data }) {
    //   // handle success
    //   // const data = response.data // array
    //   console.log("POND:DEBUG:then", data);
    //   console.log("AAAAAAAAAAA")
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log("POND:DEBUG:catch", error);
    // })
    // .finally(function () {
    //   // always executed
    //   console.log("POND:DEBUG:finally")
    // });
  }

  return (
    <div className="page container bg-slate-200">
      <div className="product-list">
        <button onClick={handleClick}>FETCH</button>
        {/* {count} */}
        {/* <Product props1="Hello" onClick={handleClick} /> */}
        {/* {productDOMs} */}
        {/* {renderProducts} */}
        {/* {textIds.map((textId) => <p>{textId}</p>)} */}
      </div>
    </div>
  );
};

export default TestDebug
