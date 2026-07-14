import { Play, Apple } from "lucide-react";
import { motion } from "framer-motion";

const DownloadButtons = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-lg"
      >
        <Play size={24} />

        <div className="text-left">
          <p className="text-xs text-slate-300">
            GET IT ON
          </p>

          <p className="font-semibold">
            Google Play
          </p>
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-4 shadow-lg"
      >
        <Apple size={24} />

        <div className="text-left">
          <p className="text-xs text-slate-500">
            Download on the
          </p>

          <p className="font-semibold text-slate-900">
            App Store
          </p>
        </div>
      </motion.button>

    </div>
  );
};

export default DownloadButtons;