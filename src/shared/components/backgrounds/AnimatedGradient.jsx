import { motion } from "framer-motion";

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-30, 30, -30],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [30, -30, 30],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-[120px]"
      />
    </div>
  );
};

export default AnimatedGradient;