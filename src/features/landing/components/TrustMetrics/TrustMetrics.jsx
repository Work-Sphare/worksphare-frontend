import { motion } from "framer-motion";

import metrics from "./metricsData";
import MetricItem from "./MetricItem";

const TrustMetrics = () => {
  return (
    <section
      id="trust-metrics"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Divider */}

        <div className="mx-auto mb-20 h-px max-w-5xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Trusted Across India
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Growing Every Day
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Thousands of skilled professionals and customers trust WorkSphare
            every day.
          </p>
        </motion.div>

        {/* Metrics */}

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric, index) => (
            <MetricItem
              key={metric.id}
              metric={metric}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrustMetrics;