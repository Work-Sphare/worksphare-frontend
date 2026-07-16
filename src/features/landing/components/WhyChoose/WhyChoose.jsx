import { motion } from "framer-motion";

import FeatureItem from "./FeatureItem";
import features from "./featuresData";

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-white py-28"
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
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Why Choose WorkSphare
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Whether you're hiring skilled professionals or looking for work,
            WorkSphare makes the entire experience simple, secure and reliable.
          </p>

        </motion.div>

        {/* Features */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;