import { motion } from "framer-motion";

const FloatingBadge = ({ icon, text, className }) => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 px-4 py-2 shadow-xl ${className}`}
    >
      <span>{icon}</span>

      <span className="text-sm font-semibold text-slate-700">{text}</span>
    </motion.div>
  );
};

export default FloatingBadge;
