import { motion } from "framer-motion";
import StepIcon from "./StepIcon";

const TimelineStep = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="relative flex gap-6"
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
            repeat: Infinity,
          }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600
                    to-blue-500 border-4 border-white shadow-[0_15px_35px_rgba(37,99,235,0.35)]"
        >
          <span className="text-lg font-bold text-white">
            {String(item.step).padStart(2, "0")}
          </span>

          {/* Glow */}

          <div className="absolute h-14 w-14 rounded-full bg-blue-500/30 blur-md" />
        </motion.div>

        {!isLast && (
          <div className="mt-2 h-20 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-blue-100" />
        )}
      </div>

      {/* Content */}

      <div className="pb-10 flex gap-5">
        <StepIcon Icon={Icon} color="text-orange-500" />

        <div>
          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

          <p className="mt-2 text-slate-500 leading-7">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
