import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ConnectionLine = ({ direction = "left" }) => {
  return (
    <div className="flex items-center">

      {/* Left to Right */}

      {direction === "left" && (
        <>
          <div className="relative flex h-[6px] w-64 items-center overflow-hidden rounded-full bg-slate-200">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-orange-100" />

            <motion.div
              animate={{
                x: [-180, 180],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-full
                w-14
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-orange-400
                to-orange-500
                shadow-lg
              "
            />
          </div>

          <ChevronRight
            size={25}
            className="ml-1 text-blue-600"
          />
        </>
      )}

      {/* Right to Left */}

      {direction === "right" && (
        <>
          <ChevronLeft
            size={25}
            className="mr-1 text-orange-500"
          />

          <div className="relative flex h-[6px] w-64 items-center overflow-hidden rounded-full bg-slate-200">

            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-blue-200 to-blue-100" />

            <motion.div
              animate={{
                x: [180, -180],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-full
                w-14
                rounded-full
                bg-gradient-to-r
                from-orange-500
                via-blue-400
                to-blue-600
                shadow-lg
              "
            />
          </div>
        </>
      )}

    </div>
  );
};

export default ConnectionLine;