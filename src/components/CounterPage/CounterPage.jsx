// CounterPage.jsx
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CounterCard from "./CounterCard";

const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      setCounterState(inView);
    },
  });

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10">
      {/* === HEADING === */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r bg-black bg-clip-text text-transparent leading-tight">
          Creating an Impact, One Transaction at a Time..
        </h2>
      </div>

      {/* === COUNTER SECTION === */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r bg-black rounded-3xl px-6 py-12 shadow-xl"
      >
        <CounterCard end={20} suffix="+" title="Cities" inView={counterState} />
        <CounterCard end={550} suffix="+" title="Clients" inView={counterState} />
        <CounterCard end={2000} suffix="+" title="Machines" inView={counterState} />
        <CounterCard end={1} suffix="Mn+" title="Daily Outreach" inView={counterState} />
      </div>
    </div>
  );
};

export default CounterPage;
