import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../../../assets/animations/variants";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="bg-white py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Popular Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Find trusted professionals for every household and business need.
          </p>
        </motion.div>

        {/* Services Grid */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;