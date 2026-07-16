import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import WorkerIllustration from "./WorkerIllustration";
import Benefits from "./Benefits";

const BecomeWorker = () => {
  return (
    <section
      id="become-worker"
      className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <WorkerIllustration />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Join WorkSphare
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Become a
            <span className="text-blue-600"> Verified </span>
            Professional
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Join thousands of skilled professionals who use WorkSphare
            to find nearby customers, manage bookings, and grow their
            business.
          </p>

          <Benefits />

          <button
            className="
              group
              mt-10
              flex
              items-center
              gap-3
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            Register as Worker

            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default BecomeWorker;