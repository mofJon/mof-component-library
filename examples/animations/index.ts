const transition = {
  type: "spring",
  damping: 20,
};

export const childAnims = {
  contentBlock: {
    variants: {
      inactive: {
        height: "9rem",
        background: "rgba(255,255,255,0)",
      },
      active: {
        height: "17rem",
        background: "rgba(255,255,255,1)",
      },
    },
    transition,
  },
  preContent: {
    variants: {
      inactive: {
        paddingTop: "1rem",
      },
      active: {
        paddingTop: 0,
      },
    },
    transition,
  },
  description: {
    variants: {
      inactive: {
        opacity: 0,
        y: 30,
      },
      active: {
        opacity: 1,
        y: 0,
      },
    },
    transition: {
      ...transition,
      delay: 0.2,
    },
  },
  primaryCta: {
    variants: {
      inactive: {
        opacity: 0,
      },
      active: {
        opacity: 1,
        transition: {
          ...transition,
          delay: 0.4,
        },
      },
    },
  },
};

export const zhaCardAnim = {
  initial: "inactive",
  whileHover: "active",
  variants: {
    inactive: {
      borderRadius: 0,
    },
    active: {
      borderRadius: 10,
    },
  },
  transition,
};
