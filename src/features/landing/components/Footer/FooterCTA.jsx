import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const FooterCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 px-10 py-16">

      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

        {/* Left */}

        <div className="max-w-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Join WorkSphare Today
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
            Find Trusted Professionals
            <br />
            or Grow Your Business.
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Whether you're looking for skilled workers or searching for new
            job opportunities, WorkSphare connects you with the right people.
          </p>

        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 sm:flex-row">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl"
          >
            Book a Service

            <ArrowRight size={18} />

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md"
          >
            Become a Worker

            <BriefcaseBusiness size={18} />

          </motion.button>

        </div>

      </div>

    </div>
  );
};

export default FooterCTA;