import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Korayut S.</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu mauris commodo, rutrum dui ut, tempor massa. Curabitur at ornare
            metus. In a turpis scelerisque, rhoncus odio at, vestibulum diam.
            Aliquam non auctor dolor. Vivamus sed nulla arcu. Etiam dictum Na.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
