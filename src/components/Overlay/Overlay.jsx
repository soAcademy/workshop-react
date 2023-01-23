import React from "react";

function Overlay(props) {
  const { closeHamburger } = props;

  return (
    <div
      onClick={() => closeHamburger()}
      className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-60"
    ></div>
  );
}

export default Overlay;
