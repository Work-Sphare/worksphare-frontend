import { motion } from "framer-motion";
import ConnectionLine from "./ConnectionLine";

import logo from "../../../../assets/logos/workspare-icon.png";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const Connection = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div className="hidden lg:flex lg:w-[260px] xl:w-auto flex-col items-center justify-center">
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
            repeat: reduceMotion ? 0 : Infinity,
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
              repeat: reduceMotion ? 0 : Infinity,
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
            className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-2xl 2xl:h-28 2xl:w-28"
          >
            <img
              src={logo}
              alt="WorkSphare"
              loading="lazy"
              className="h-16 w-16 object-contain 2xl:h-20 2xl:w-20"
            />
          </div>
        </motion.div>

        <ConnectionLine direction="right" />
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900 2xl:text-3xl">WorkSphare</h3>

     <p className="mt-3 max-w-[220px] text-center text-sm leading-6 text-slate-500 2xl:max-w-xs 2xl:text-base 2xl:leading-7">
        Connecting Customers with Skilled Workers
      </p>
    </div>
  );
};

export default Connection;
