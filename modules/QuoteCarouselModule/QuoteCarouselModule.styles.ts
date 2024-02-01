export const quoteContainer = {
  className: "quote-container",
};

export const quoteCarousel = {
  className: "quote-carousel",
};

const fade = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      stiffness: 50,
      damping: 10,
    },
  },
};

export const quoteSlide = {
  className: "quote-slide",
  variants: fade,
};

export const quoteMainWrapper = {
  className: "quote-main-wrapper",
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
        damping: 10,
        stiffness: 6,
      },
    },
  },
};

export const quoteMain = {
  className: "quote-main",
};

export const quoteLeft = {
  className: "quote-left",
};

export const quoteRight = {
  className: "quote-right",
};

export const quoteFooter = {
  className: "quote-footer",
  variants: {
    inactive: {},
    active: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  },
};

const slowFadeUp = {
  inactive: {
    opacity: 0,
    y: 10,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 50,
    },
  },
};

export const quoteAuthor = {
  className: "quote-author",
  variants: slowFadeUp,
};

export const quoteSource = {
  className: "quote-source",
  variants: slowFadeUp,
};
