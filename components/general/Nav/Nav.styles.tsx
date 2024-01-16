import { cva } from "class-variance-authority";
// import { navVars } from "./nav.types";

type NavVars = any;

// nav Variant Styles
export const nav = cva("nav", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      flyout: "flyout"
    },
    direction: {
      row: "row",
      column: "column"
    },
  },
  defaultVariants: {
    variant: "primary",
    direction: "row",
  },
});

// nav Props
// @ts-ignore
export const navVars: NavVars = (variant, direction, classes) => {
  const baseStyles = `${classes ? classes : ""}`;

  return {
    className: nav({
      variant,
      direction,
      className: baseStyles,
    }),
  };
};

export const navPanel = (isActive: boolean) => ({
  className: `nav-panel ${isActive ? "active" : ""}`,
  whileHover: "hovered"
});

export const navItem = (isActive: boolean) => ({
  className: `nav-item ${isActive ? "active" : ""}`,
  whileHover: "hovered"
});

export const navItemWrapper = {
  className: "nav-item-wrapper"
}
