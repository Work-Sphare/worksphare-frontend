import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../../../shared/hooks/usePrefersReducedMotion";

const FeatureItem = ({ feature, index }) => {
  const reduceMotion = usePrefersReducedMotion();
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
      className="group text-center"
    >
      {/* Icon */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: reduceMotion ? 0 : Infinity,
          delay: index * 0.3,
        }}
        className={`
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          ${feature.bg}
        `}
      >
        <Icon
          size={34}
          className={feature.color}
        />
      </motion.div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
        {feature.title}
      </h3>

      {/* Description */}

      <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-500">
        {feature.description}
      </p>

      {/* Animated Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileHover={{
          width: 80,
        }}
        transition={{
          duration: 0.3,
        }}
        className="mx-auto mt-5 h-1 rounded-full bg-blue-600"
      />
    </motion.div>
  );
};

export default FeatureItem;