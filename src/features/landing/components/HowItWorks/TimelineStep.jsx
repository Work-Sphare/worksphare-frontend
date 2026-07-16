import { motion } from "framer-motion";
import StepIcon from "./StepIcon";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const TimelineStep = ({ item, isLast }) => {
  const reduceMotion = usePrefersReducedMotion();
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="relative flex gap-4 lg:gap-5 xl:gap-6"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">
        {/* Step Indicator */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: reduceMotion ? 0 : Infinity,
          }}
          className="relative flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-blue-500 shadow-[0_15px_35px_rgba(37,99,235,0.35)]"
        >
          <span className="text-base font-bold text-white lg:text-lg">
            {String(item.step).padStart(2, "0")}
          </span>

          {/* Glow */}

          <div className="absolute h-14 w-14 rounded-full bg-blue-500/30 blur-md" />
        </motion.div>

        {!isLast && (
          <div className="mt-2 h-16 lg:h-20 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-blue-100"/>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-1 gap-3 pb-8 lg:gap-5 lg:pb-10">
        <StepIcon Icon={Icon} color="text-orange-500" />

        <div>
          <h3 className="text-lg font-bold text-slate-900 lg:text-xl">{item.title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 lg:text-base lg:leading-7">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
