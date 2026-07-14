import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const FloatingCard = ({
  testimonial,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.04,
        y: -8,
      }}
      className={`
        absolute
        w-72
        rounded-3xl
        border
        border-slate-200
        bg-white/95
        p-5
        shadow-[0_20px_50px_rgba(15,23,42,0.10)]
        backdrop-blur-xl
        ${className}
      `}
    >
      {/* Rating */}

      <div className="mb-3 flex items-center justify-between">

        <div className="flex">

          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

        </div>

        <CheckCircle2
          size={18}
          className="text-blue-600"
        />

      </div>

      {/* Review */}

      <p className="line-clamp-4 text-sm leading-7 text-slate-600">
        {testimonial.message}
      </p>

      {/* User */}

      <div className="mt-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 font-bold text-white">
          {testimonial.initials}
        </div>

        <div>

          <h4 className="text-sm font-semibold">
            {testimonial.name}
          </h4>

          <p className="text-xs text-slate-500">
            {testimonial.role}
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default FloatingCard;