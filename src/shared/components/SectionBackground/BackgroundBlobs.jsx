import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const BackgroundBlobs = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <>
      {/* Blue Blob */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-16
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-300/20
          blur-[120px]
        "
      />

      {/* Orange Blob */}

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-300/20
          blur-[120px]
        "
      />
    </>
  );
};

export default BackgroundBlobs;