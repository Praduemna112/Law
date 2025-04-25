import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ['Snacks', 'Smart', 'Next-gen', 'Modern'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="mt-4 sm:mt-6">
      <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide">
        Modern solutions for{" "}
        <span className="bg-gradient-to-r bg-orange-400 bg-clip-text text-transparent font-extrabold">
          {text}
        </span>
        <Cursor cursorStyle="|" cursorColor="#fb923c" />
      </h2>
    </div>
  );
};

export default TypeWriter;
