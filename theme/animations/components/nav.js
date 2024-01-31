export const navPanelWrapperAnimations = (height, attach) => {
  if (attach) {
    return {
      variants: {
        inactive: {
          opacity: attach === "bottom" ? height : 0,
          //   height: 0,
          transition: {
            delay: 0.5,
          },
        },
        active: {
          opacity: 1,
          height,
        },
      },
    };
  }

  return {
    variants: {
      inactive: {
        height: 0,
      },
      active: {
        height,
      },
    },
  };
};

export const navPanelAnimations = {
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  },
};

export const navItemAnimations = (index) => ({
  variants: {
    inactive: {
      opacity: 0,
      y: 20,
    },
    active: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5 + index * 0.2,
      },
    },
  },
});
