import { motion } from "framer-motion";
import { CheckCircle2, Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative w-[290px] sm:w-[330px] lg:w-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-xl transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
    >
      {/* Quote Icon */}

      <Quote
        size={40}
        className="absolute -top-1 right-4 text-blue-50 sm:-top-2 sm:right-5"
      />

      {/* Rating */}

      <div className="mb-6 flex gap-1">

        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* Message */}

      <p className="relative z-10 min-h-[80px] text-base leading-7 text-slate-600 sm:min-h-[95px] sm:text-lg sm:leading-8">
        "{testimonial.message}"
      </p>

      {/* Divider */}

      <div className="my-6 h-px bg-slate-100" />

      {/* Footer */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {/* Avatar */}

          <div
            className="
              flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-orange-500
              text-lg
              font-bold
              text-white
              shadow-lg
            "
          >
            {testimonial.initials}
          </div>

          {/* User */}

          <div>

            <h4 className="text-sm font-bold text-slate-900 sm:text-base">
              {testimonial.name}
            </h4>

            <p className="text-sm text-slate-500">
              {testimonial.role} • {testimonial.city}
            </p>

          </div>

        </div>

        {/* Verified */}

        {testimonial.verified && (
          <div className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1">

            <CheckCircle2
              size={16}
              className="text-blue-600"
            />

            <span className="text-xs font-semibold text-blue-600">
              Verified
            </span>

          </div>
        )}

      </div>

    </motion.div>
  );
};

export default TestimonialCard;