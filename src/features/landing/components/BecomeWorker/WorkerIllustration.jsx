import { motion } from "framer-motion";

import worker from "../../../../assets/illustrations/worker.png";
import JobNotification from "./JobNotification";
import usePrefersReducedMotion from "../../../../shared/hooks/usePrefersReducedMotion";

const WorkerIllustration = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div className="relative flex justify-center">

      <JobNotification />

      <motion.img
        src={worker}
        alt="Worker"
        loading="lazy"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="w-[900px] h-[500px]"
      />
    </div>
  );
};

export default WorkerIllustration;