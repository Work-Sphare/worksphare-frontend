import { motion } from "framer-motion";
import ConnectionLine from "./ConnectionLine";

import logo from "../../../../assets/logos/workspare-icon.png";

const Connection = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center">
      {/* Animated Connection */}

      <div className="flex items-center gap-5">
        <ConnectionLine direction="left" />

        {/* Logo */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Glow */}

          <motion.div
            animate={{
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-r
      from-blue-400/40
      via-orange-300/30
      to-blue-400/40
      blur-3xl
  "
          />

          <div
            className="
              relative
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-2xl
              border
              border-slate-100
            "
          >
            <img
              src={logo}
              alt="WorkSphare"
              className="h-20 w-20 object-contain"
            />
          </div>
        </motion.div>

        <ConnectionLine direction="right" />
      </div>

      <h3 className="mt-4 text-3xl font-bold text-slate-900">WorkSphare</h3>

      <p className="mt-3 max-w-xs text-center text-slate-500 leading-7">
        Connecting Customers with Skilled Workers
      </p>
    </div>
  );
};

export default Connection;
