import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

import features from "./downloadData";
import FeatureList from "./FeatureList";
import DownloadButtons from "./DownloadButtons";
import homeScreen from "../../../../assets/illustrations/homescreen.png";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const DownloadApp = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <section
      id="download-app"
      className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Side */}

        <div>
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Mobile App
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Everything You Need.
            <br />
            In One App.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            Book trusted professionals, track services in real-time, receive
            instant updates and manage bookings from anywhere.
          </p>

          <div className="mt-12">
            <FeatureList features={features} />
          </div>

          <DownloadButtons />
        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">
          {/* Background Glow */}

          <div className="absolute h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
      relative
      h-[640px]
      w-[320px]
      rounded-[48px]
      border-[10px]
      border-slate-900
      bg-black
      shadow-[0_40px_80px_rgba(37,99,235,0.18)]
    "
          >
            {/* Dynamic Island */}

            <div
              className="
        absolute
        left-1/2
        top-4
        z-20
        h-7
        w-32
        -translate-x-1/2
        rounded-full
        bg-slate-900
      "
            />

            {/* Screen */}

            <img
              src={homeScreen}
              alt="WorkSphare App"
              loading="lazy"
              className="
        absolute
        left-1/2
        top-5
        h-[600px]
        w-[292px]
        -translate-x-1/2
        rounded-[34px]
        object-cover
      "
            />
          </motion.div>

          {/* Floating Badge */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: reduceMotion ? 0 : Infinity,
            }}
            className="
      absolute
      -left-6
      top-24
      rounded-2xl
      bg-white
      px-5
      py-3
      shadow-xl
    "
          >
            <p className="text-xs text-slate-500">⭐ Rated</p>

            <h4 className="font-bold text-slate-900">4.9/5</h4>
          </motion.div>

          {/* Floating Badge */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: reduceMotion ? 0 : Infinity,
            }}
            className="
      absolute
      -right-8
      bottom-24
      rounded-2xl
      bg-white
      px-5
      py-3
      shadow-xl
    "
          >
            <p className="text-xs text-slate-500">Secure</p>

            <h4 className="font-bold text-blue-600">Booking</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
