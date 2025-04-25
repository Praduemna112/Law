// CounterCard.jsx
import React from "react";
import CountUp from "react-countup";

const CounterCard = ({ end, suffix, title, inView }) => {
  return (
    <div className="bg-red-500 border border-white/20 rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        {inView && <CountUp start={0} end={end} duration={1.75} />} {suffix}
      </h2>
      <p className="text-lg sm:text-xl font-semibold text-white text-center mt-2">
        {title}
      </p>
    </div>
  );
};

export default CounterCard;
