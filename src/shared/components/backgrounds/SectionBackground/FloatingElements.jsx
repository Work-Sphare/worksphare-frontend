import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../../../features/landing/hooks/usePrefersReducedMotion";

const particles = [
  {
    type: "circle",
    top: "8%",
    left: "6%",
    size: 18,
    color: "#2563EB",
    duration: 10,
  },
  {
    type: "plus",
    top: "20%",
    right: "8%",
    size: 28,
    color: "#F97316",
    duration: 12,
  },
  {
    type: "ring",
    top: "40%",
    left: "2%",
    size: 40,
    color: "#2563EB",
    duration: 14,
  },
  {
    type: "sparkle",
    bottom: "18%",
    left: "12%",
    size: 24,
    color: "#F97316",
    duration: 9,
  },
  {
    type: "circle",
    bottom: "10%",
    right: "12%",
    size: 14,
    color: "#2563EB",
    duration: 11,
  },
  {
    type: "ring",
    top: "12%",
    left: "48%",
    size: 36,
    color: "#F97316",
    duration: 13,
  },
  {
    type: "plus",
    bottom: "15%",
    right: "35%",
    size: 24,
    color: "#2563EB",
    duration: 15,
  },
  {
    type: "sparkle",
    top: "65%",
    left: "45%",
    size: 20,
    color: "#2563EB",
    duration: 10,
  },
];
const FloatingElements = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            rotate: [-8, 8, -8],
            opacity: [0.08, 0.18, 0.08],
            }}
          transition={{
            duration: item.duration,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: index,
          }}
          className="absolute"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.type === "circle" && (
            <div
              style={{
                width: item.size,
                height: item.size,
                background: item.color,
                borderRadius: "999px",
                opacity: 1,
              }}
            />
          )}

          {item.type === "ring" && (
            <div
              style={{
                width: item.size,
                height: item.size,
                border: `2px solid ${item.color}`,
                borderRadius: "999px",
                opacity: 1,
              }}
            />
          )}

          {item.type === "plus" && (
            <div
              style={{
                color: item.color,
                fontSize: item.size,
                opacity: 2,
                fontWeight: 700,
              }}
            >
              +
            </div>
          )}

          {item.type === "sparkle" && (
            <div
              style={{
                color: item.color,
                fontSize: item.size,
                opacity: 1,
              }}
            >
              ✦
            </div>
          )}
        </motion.div>
      ))}

    </div>
  );
};

export default FloatingElements;