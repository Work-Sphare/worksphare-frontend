import { motion } from "framer-motion";

const blobs = [
  {
    size: "h-32 w-32",
    top: "top-20",
    left: "left-20",
    color: "bg-blue-300/20",
    duration: 8,
  },
  {
    size: "h-24 w-24",
    top: "bottom-24",
    right: "right-24",
    color: "bg-orange-300/20",
    duration: 10,
  },
  {
    size: "h-20 w-20",
    top: "top-1/2",
    left: "left-1/3",
    color: "bg-blue-200/20",
    duration: 12,
  },
];

const FloatingBlobs = () => {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-3xl ${blob.size} ${blob.color} ${blob.top || ""} ${blob.bottom || ""} ${blob.left || ""} ${blob.right || ""}`}
        />
      ))}
    </>
  );
};

export default FloatingBlobs;