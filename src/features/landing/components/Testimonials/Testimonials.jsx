import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import testimonials from "./testimonialsData";
import TestimonialsRow from "./TestimonialsRow";

const Testimonials = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(2);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 font-semibold text-red-600">
            <Heart size={16} />
            Loved by Our Community
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Trusted by Skilled Professionals
            <br />& Happy Customers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            From finding reliable workers to growing independent careers,
            WorkSphare is creating meaningful connections every day.
          </p>
        </motion.div>
        <div className="space-y-10">
          {/* Top Row */}

          <TestimonialsRow testimonials={firstRow} direction="left" />

          {/* Bottom Row */}

          <TestimonialsRow testimonials={secondRow} direction="right" />
        </div>
      </div>

      {/* Fade Left */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-slate-50 to-transparent" />

      {/* Fade Right */}

      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-slate-50 to-transparent" />
    </section>
  );
};

export default Testimonials;

// import { motion } from "framer-motion";
// import { Heart } from "lucide-react";

// import testimonials from "./testimonialsData";
// import PhoneMockup from "./PhoneMockup";
// import FloatingCard from "./FloatingCard";

// const Testimonials = () => {
//   return (
//     <section
//       id="testimonials"
//       className="relative overflow-hidden bg-slate-50 py-32"
//     >
//       {/* Background Glow */}

//       <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
//       <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-24 text-center"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 font-semibold text-red-600">
//             <Heart size={16} />
//             Real Stories
//           </span>

//           <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
//             Trusted by Workers &
//             <br />
//             Happy Customers
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
//             Every booking creates a new success story.
//           </p>

//         </motion.div>

//         {/* Desktop */}

//         <div className="relative hidden h-[750px] items-center justify-center lg:flex">

//           <PhoneMockup />

//           <FloatingCard
//             testimonial={testimonials[0]}
//             className="left-0 top-20"
//             delay={0}
//           />

//           <FloatingCard
//             testimonial={testimonials[1]}
//             className="right-0 top-24"
//             delay={1}
//           />

//           <FloatingCard
//             testimonial={testimonials[2]}
//             className="left-12 bottom-24"
//             delay={2}
//           />

//           <FloatingCard
//             testimonial={testimonials[3]}
//             className="right-8 bottom-20"
//             delay={3}
//           />

//           <FloatingCard
//             testimonial={testimonials[4]}
//             className="left-1/2 top-0 -translate-x-1/2"
//             delay={4}
//           />

//         </div>

//         {/* Mobile */}

//         <div className="space-y-6 lg:hidden">

//           {testimonials.map((testimonial) => (
//             <FloatingCard
//               key={testimonial.id}
//               testimonial={testimonial}
//               className="relative !left-auto !top-auto !bottom-auto !right-auto w-full"
//             />
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;