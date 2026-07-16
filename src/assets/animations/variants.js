export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};