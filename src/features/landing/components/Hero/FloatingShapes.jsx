import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-24 h-72 w-72 rounded-full bg-blue-400/25 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-orange-400/20 blur-[120px]"
      />
    </>
  );
};

export default FloatingShapes;