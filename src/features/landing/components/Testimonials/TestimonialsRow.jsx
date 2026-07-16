import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import usePrefersReducedMotion from "../../../../shared/hooks/usePrefersReducedMotion";

const TestimonialsRow = ({
  testimonials,
  direction = "left",
}) => {
  const items = [...testimonials, ...testimonials];
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="overflow-x-auto overflow-y-hidden py-4 scrollbar-hide lg:overflow-hidden">
      <motion.div
       animate={window.innerWidth >= 1024 ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] } : {}}
        transition={{
          duration: 35,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-5 lg:gap-8"
      >
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsRow;