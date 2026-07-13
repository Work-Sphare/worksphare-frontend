import { motion } from "framer-motion";
import benefits from "./benefitsData";

const Benefits = () => {
  return (
    <div className="mt-10 space-y-6">

      {benefits.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="flex items-start gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Icon
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
};

export default Benefits;