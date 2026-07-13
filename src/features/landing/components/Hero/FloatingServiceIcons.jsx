import {
  Hammer,
  Wrench,
  Paintbrush,
  Truck,
  Zap,
  ShieldCheck,
  HardHat,
  Drill,
} from "lucide-react";

import { motion } from "framer-motion";

const icons = [
  {
    Icon: Hammer,
    top: "12%",
    left: "6%",
    delay: 0,
  },
  {
    Icon: Wrench,
    top: "25%",
    right: "8%",
    delay: 1,
  },
  {
    Icon: Paintbrush,
    bottom: "15%",
    left: "12%",
    delay: 2,
  },
  {
    Icon: Truck,
    bottom: "10%",
    right: "15%",
    delay: 3,
  },
  {
    Icon: Zap,
    top: "50%",
    left: "2%",
    delay: 4,
  },
  {
    Icon: ShieldCheck,
    top: "65%",
    right: "3%",
    delay: 5,
  },
  {
    Icon: HardHat,
    top: "18%",
    left: "48%",
    delay: 6,
  },
  {
    Icon: Drill,
    bottom: "25%",
    right: "42%",
    delay: 7,
  },
];

const FloatingServiceIcons = () => {
  return (
    <>
      {icons.map(({ Icon, delay, ...position }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-600/10"
          style={position}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={60} strokeWidth={1.2} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingServiceIcons;