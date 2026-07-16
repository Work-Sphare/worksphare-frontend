import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const professions = [
  {
    name: "Carpenters",
    color: "text-orange-500",
  },
  {
    name: "Electricians",
    color: "text-yellow-500",
  },
  {
    name: "Plumbers",
    color: "text-blue-500",
  },
  {
    name: "Mechanics",
    color: "text-red-500",
  },
  {
    name: "Civil Workers",
    color: "text-green-400",
  },
  {
    name: "Painters",
    color: "text-pink-500",
  },
  {
    name: "Coolies",
    color: "text-green-600",
  },
  {
    name: "Hair Stylists",
    color: "text-orange-500",
  },
  {
    name: "Beauticians",
    color: "text-yellow-500",
  },
  {
    name: "Car Drivers",
    color: "text-blue-500",
  },
  {
    name: "Home Tutions",
    color: "text-red-500",
  }
];

export default function AnimatedProfession() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % professions.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={professions[index].name}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-extrabold ${professions[index].color}`}
        >
          {professions[index].name}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}