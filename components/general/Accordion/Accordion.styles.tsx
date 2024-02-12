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
};

export const accordionClose = {
  className: "accordion-close",
};

export const accordionContent = {
  className: "accordion-content",
};
