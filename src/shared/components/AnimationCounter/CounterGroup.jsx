import { useState } from "react";
import useInView from "../../hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";

const counters = [
  {
    id: 1,
    end: 1000,
    label: "Workers",
    color: "text-blue-600",
  },
  {
    id: 2,
    end: 500,
    label: "Customers",
    color: "text-orange-500",
  },
  {
    id: 3,
    end: 80,
    label: "Services",
    color: "text-green-600",
  },
];

const CounterGroup = () => {
  const { ref, isVisible } = useInView();

  const [active, setActive] = useState(0);

  return (
    <div
      ref={ref}
      className="mt-12 flex flex-wrap gap-10"
    >
      {counters.map((item, index) => (
        <div key={item.id}>
          <h2 className={`text-4xl font-bold ${item.color}`}>
            <AnimatedCounter
              end={item.end}
              start={isVisible && active === index}
              onComplete={() => {
                if (index < counters.length - 1) {
                  setActive(index + 1);
                }
              }}
            />
          </h2>

          <p className="text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CounterGroup;