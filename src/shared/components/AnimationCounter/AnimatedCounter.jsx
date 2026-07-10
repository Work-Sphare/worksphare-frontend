import { useEffect, useState } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "+",
  start = false,
  onComplete,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);

        if (onComplete) {
          onComplete();
        }
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration, onComplete]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default AnimatedCounter;