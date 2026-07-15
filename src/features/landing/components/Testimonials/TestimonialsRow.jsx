import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const TestimonialsRow = ({
  testimonials,
  direction = "left",
}) => {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="overflow-x-auto overflow-y-hidden py-4 scrollbar-hide lg:overflow-hidden">
      <motion.div
       animate={window.innerWidth >= 1024 ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] } : {}}
        transition={{
          duration: 35,
          repeat: Infinity,
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