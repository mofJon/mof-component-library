const card = {
  variants: {
    inactive: {
      opacity: 0,
      scale: 0.9,
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 50,
      },
    },
  },

  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const motion = {
  card,
};

export default motion;
