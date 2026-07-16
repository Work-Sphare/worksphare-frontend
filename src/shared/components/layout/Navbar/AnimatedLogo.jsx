import { motion } from "framer-motion";
import { Shield, Wrench, Sparkles } from "lucide-react";

export default function AnimatedLogo() {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      {/* Logo Icon */}
      <div className="relative flex items-center justify-center w-44 h-44">

        {/* Shield */}
        <motion.div
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute"
        >
          <Shield
            size={120}
            strokeWidth={2}
            className="text-blue-600"
          />
        </motion.div>

        {/* Left Wrench */}
        <motion.div
          initial={{ x: -80, rotate: -180, opacity: 0 }}
          animate={{ x: -35, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute"
        >
          <Wrench
            size={40}
            className="text-orange-500"
          />
        </motion.div>

        {/* Right Wrench */}
        <motion.div
          initial={{ x: 80, rotate: 180, opacity: 0 }}
          animate={{ x: 35, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute"
        >
          <Wrench
            size={40}
            className="text-orange-500 rotate-180"
          />
        </motion.div>

        {/* W */}
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 200,
          }}
          className="absolute text-5xl font-black text-blue-700"
        >
          W
        </motion.h1>

        {/* Sparkles */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
          className="absolute -top-2 right-6"
        >
          <Sparkles
            size={24}
            className="text-yellow-400"
          />
        </motion.div>

      </div>

      {/* Brand Name */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="mt-5 text-4xl font-extrabold tracking-tight"
      >
        <span className="text-blue-700">Works</span>
        <span className="text-orange-500">phare</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-2 text-gray-500"
      >
        Connecting Skills. Building Trust.
      </motion.p>

    </div>
  );
}