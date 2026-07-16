import { AnimatePresence, motion } from "framer-motion";
import { MapPin, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";

const jobs = [
  {
    service: "Electrician",
    location: "Kondapur",
    amount: "₹850",
  },
  {
    service: "Plumber",
    location: "Madhapur",
    amount: "₹650",
  },
  {
    service: "Carpenter",
    location: "Gachibowli",
    amount: "₹1200",
  },
  {
    service: "Painter",
    location: "Kukatpally",
    amount: "₹1800",
  },
  {
    service: "Mechanic",
    location: "Hitech City",
    amount: "₹950",
  },
];

const JobNotification = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const job = jobs[index];

  return (
    <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2">

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: -40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          transition={{
            duration: 0.45,
          }}
          className="w-72 rounded-3xl bg-white p-5 shadow-2xl"
        >
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            🔔 New Job Request
          </span>

          <h3 className="mt-4 text-xl font-bold text-slate-800">
            {job.service}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-slate-500">
            <MapPin size={16} />
            {job.location}
          </div>

          <div className="mt-2 flex items-center gap-2 text-blue-600 font-semibold">
            <IndianRupee size={16} />
            {job.amount}
          </div>

          <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Accept Job
          </button>
        </motion.div>

      </AnimatePresence>

    </div>
  );
};

export default JobNotification;