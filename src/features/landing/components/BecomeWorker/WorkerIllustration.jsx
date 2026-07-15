import { motion } from "framer-motion";

import worker from "../../../../assets/illustrations/worker.png";
import JobNotification from "./JobNotification";

const WorkerIllustration = () => {
  return (
    <div className="relative flex justify-center">

      <JobNotification />

      <motion.img
        src={worker}
        alt="Worker"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[900px] h-[500px]"
      />
    </div>
  );
};

export default WorkerIllustration;