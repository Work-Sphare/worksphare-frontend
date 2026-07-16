import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../../../shared/hooks/usePrefersReducedMotion";

const PhoneMockup = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        h-[620px]
        w-[310px]
        rounded-[48px]
        border-[10px]
        border-slate-900
        bg-white
        shadow-[0_40px_80px_rgba(37,99,235,0.18)]
      "
    >
      {/* Dynamic Island */}

      <div
        className="
          absolute
          left-1/2
          top-4
          h-7
          w-32
          -translate-x-1/2
          rounded-full
          bg-slate-900
        "
      />

      {/* Screen */}

      <div className="flex h-full flex-col p-6 pt-16">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3">

            <Smartphone
              size={22}
              className="text-blue-600"
            />

          </div>

          <div>

            <h3 className="font-bold text-slate-900">
              WorkSphare
            </h3>

            <p className="text-xs text-slate-500">
              Book trusted professionals
            </p>

          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-blue-50 p-5">

          <p className="text-sm text-slate-500">
            Nearby Electrician
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Ravi Kumar
          </h2>

          <p className="mt-2 text-yellow-500">
            ★★★★★
          </p>

          <button
            className="
              mt-6
              w-full
              rounded-2xl
              bg-blue-600
              py-3
              font-semibold
              text-white
            "
          >
            Book Now
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default PhoneMockup;