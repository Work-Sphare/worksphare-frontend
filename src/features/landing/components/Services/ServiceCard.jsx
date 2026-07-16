import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Top */}

      <div
        className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${service.color}`}
      >
        <motion.img
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          transition={{
            duration: .4,
          }}
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-44 object-contain"
        />

        {/* Glow */}

        <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
      </div>

      {/* Bottom */}

      <div className="space-y-4 p-6">

        <div>

          <h3 className="text-2xl font-bold text-slate-800">

            {service.title}

          </h3>

          <p className="mt-2 text-slate-500">

            {service.workers} Workers Available

          </p>

        </div>

        <motion.button
          whileHover={{
            x: 6,
          }}
          className="flex items-center gap-2 font-semibold text-blue-600"
        >
          Book Now

          <ArrowRight size={18} />

        </motion.button>

      </div>
    </motion.div>
  );
};

export default ServiceCard;