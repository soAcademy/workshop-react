import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./my-style.css";
import PlaygroundTailwind from "./components/playgroundTailwind/PlaygroundTailwind";
import ProductCard from "./components/ProductCard/ProductCard";
import Resume from "./pages/Resume";
import FooterComponent from "./components/FooterComponent/FooterComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Resume />
    {/* <FooterComponent /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
