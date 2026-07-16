import { MapPin, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WorkerCard = ({ worker }) => {
  return (
    <motion.div
      key={worker.id}
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        y: -40,
      }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[300px] rounded-[28px] bg-white p-5 shadow-2xl sm:max-w-[360px] sm:p-6 lg:max-w-[420px] lg:rounded-[32px] lg:p-8"
    >
      <div className="relative flex justify-center">
        <div className="absolute top-6 h-56 w-56 rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-orange-100 blur-lg" />

        <img
          src={worker.image}
          alt={worker.profession}
          loading="lazy"
         className="relative z-10 h-52 object-contain sm:h-64 lg:h-72"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold sm:text-2xl">{worker.name}</h2>

          <BadgeCheck className="text-blue-600" size={24} />
        </div>

        <p className="mt-2 text-base font-semibold text-blue-600 sm:text-lg">
          {worker.profession}
        </p>

        <div className="mt-4 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />

          {worker.location}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star fill="#FACC15" className="text-yellow-400" size={18} />

          <span className="font-semibold">{worker.rating}</span>

          <span className="text-slate-400">({worker.experience})</span>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 lg:mt-8">
          Book Worker
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default WorkerCard;
