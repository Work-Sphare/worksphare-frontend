import clsx from "clsx";
import { motion } from "framer-motion";

const Card = ({
  children,
  className,
  hover = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.25 }}
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300",
        hover && "hover:border-blue-200 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;