import { motion } from "framer-motion";

const FeatureList = ({ features }) => {
  return (
    <div className="space-y-6">

      {features.map((feature, index) => {

        const Icon = feature.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="flex gap-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Icon size={26} />
            </div>

            <div>

              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-500">
                {feature.description}
              </p>

            </div>

          </motion.div>
        );

      })}

    </div>
  );
};

export default FeatureList;