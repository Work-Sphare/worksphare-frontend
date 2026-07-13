import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import WorkerCard from "./WorkerCard";
import FloatingBadge from "./FloatingBadge";

import workerData from "./workerData";

const HeroAnimation = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => (prev + 1) % workerData.length);

    }, 3000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="relative flex items-center justify-center">

      <FloatingBadge
        icon="⚡"
        text="Verified"
        className="-left-10 top-12"
      />

      <FloatingBadge
        icon="📍"
        text="Nearby"
        className="-right-10 top-28"
      />

      <FloatingBadge
        icon="🟢"
        text="Available"
        className="-bottom-2 left-0"
      />

      <FloatingBadge
        icon="⭐"
        text="Top Rated"
        className="-right-6 bottom-8"
      />

      <AnimatePresence mode="wait">

        <WorkerCard
          key={workerData[index].id}
          worker={workerData[index]}
        />

      </AnimatePresence>

    </div>
  );
};

export default HeroAnimation;