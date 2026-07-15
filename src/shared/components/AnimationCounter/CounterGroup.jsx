import { useEffect, useState } from "react";

import useInView from "../../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const counters = [
  {
    id: 1,
    end: 1000,
    label: "Workers",
    color: "text-blue-600",
    delay: 0,
  },
  {
    id: 2,
    end: 500,
    label: "Customers",
    color: "text-orange-500",
    delay: 1000,
  },
  {
    id: 3,
    end: 50,
    label: "Services",
    color: "text-green-600",
    delay: 1500,
  },
];

const CounterGroup = () => {
  const { ref, isVisible } = useInView();

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="mt-12 flex flex-wrap gap-10"
    >
      {counters.map((item) => (
        <div key={item.id}>
          <h2 className={`text-4xl font-bold ${item.color}`}>
            <AnimatedCounter
              end={item.end}
              duration={2200}
              delay={item.delay}
              start={start}
            />
          </h2>

          <p className="mt-2 text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CounterGroup;