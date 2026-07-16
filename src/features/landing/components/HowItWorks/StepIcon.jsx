import { motion } from "framer-motion";

const StepIcon = ({ Icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        rotate: -5,
      }}
      transition={{
        duration: .3,
      }}
      className="flex h-14 w-14 sm:h-16 sm:w-16
        items-center
        justify-center
        rounded-2xl
        bg-white
        shadow-lg
        border
        border-slate-100
      "
    >
      <Icon
        size={30}
        className="text-blue-600"
      />
    </motion.div>
  );
};

export default StepIcon;