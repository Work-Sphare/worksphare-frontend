import clsx from "clsx";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "rounded-3xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;