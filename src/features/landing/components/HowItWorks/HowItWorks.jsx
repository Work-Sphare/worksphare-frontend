import { motion } from "framer-motion";
import JourneyColumn from "./JourneyColumn";
import { customerJourney, workerJourney } from "./processData";
import Connection from "./Connection";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            How WorkSphare Works
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Connecting customers with trusted professionals in just a few simple
            steps.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto_1fr]">
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
