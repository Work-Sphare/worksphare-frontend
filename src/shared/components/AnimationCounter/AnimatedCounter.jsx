import { useEffect, useState } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  delay = 0,
  suffix = "+",
  start = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const startTimer = setTimeout(() => {
      let current = 0;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [start, end, duration, delay]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default AnimatedCounter;