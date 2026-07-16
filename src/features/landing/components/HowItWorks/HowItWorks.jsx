import { motion } from "framer-motion";
import JourneyColumn from "./JourneyColumn";
import { customerJourney, workerJourney } from "./processData";
import Connection from "./Connection";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl overflow-hidden px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-20"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            How WorkSphare Works
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
            Connecting customers with trusted professionals in just a few simple
            steps.
          </p>
        </motion.div>

        {/* Timeline */}

       <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px_minmax(0,1fr)] xl:gap-12 xl:grid-cols-[1fr_auto_1fr]">
          <JourneyColumn
            title="Customer Journey"
            emoji="👤"
            steps={customerJourney}
          />

          <Connection />

          <JourneyColumn
            title="Worker Journey"
            emoji="👷"
            steps={workerJourney}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
