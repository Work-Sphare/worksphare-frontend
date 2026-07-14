import { motion } from "framer-motion";
import AnimatedCounter from "../../../../shared/components/AnimationCounter/AnimatedCounter";

const MetricItem = ({ metric, index }) => {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon */}

      <div
        className={`
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${metric.bg}
        `}
      >
        <Icon
          size={30}
          className={metric.color}
        />
      </div>

      {/* Number */}

      <h3 className="text-5xl font-extrabold text-slate-900">

        <AnimatedCounter
          end={metric.value}
          decimals={metric.value % 1 !== 0 ? 1 : 0}
        />

        {metric.suffix}

      </h3>

      {/* Title */}

      <p className="mt-3 text-lg font-semibold text-slate-800">
        {metric.title}
      </p>

      {/* Subtitle */}

      <p className="mt-1 text-sm text-slate-500">
        {metric.subtitle}
      </p>

    </motion.div>
  );
};

export default MetricItem;