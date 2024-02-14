import classNames from "classnames";

export const accordionWrapper = {
  className: "accordion-wrapper",
  direction: "column" as const,
};

export const accordionItem = (isActive: boolean) => ({
  className: classNames("accordion-item", { active: isActive }),
});

export const accordionItemButton = {
  className: "accordion-item-button",
};

export const accordionItemPanel = {
  className: "accordion-item-panel",
  style: {
    overflow: "hidden",
  },
  variants: {
    inactive: {
      opacity: 0,
      height: 0,
    },
    active: {
      opacity: 1,
      height: "auto",
    },
  },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
  },
};

export const accordionClose = {
  className: "accordion-close",
  variants: {
    inactive: {
      rotate: 0,
    },
    active: {
      rotate: 45,
    },
  },
};

export const accordionContent = {
  className: "accordion-content",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
};
