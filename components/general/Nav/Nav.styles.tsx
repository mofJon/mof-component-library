import { cva } from "class-variance-authority";
import { NavProps } from "./nav.types";

type NavVars = any;

// nav Variant Styles
export const nav = cva("nav", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      flyout: "flyout",
    },
    persistOn: {
      all: "",
      hover: "persist-hover",
      click: "persist-click",
    },
  },
  defaultVariants: {
    variant: "primary",
    persistOn: "all",
  },
});

// nav Props
// @ts-ignore
export const navVars: NavVars = (variant, persistOn, classes) => {
  const baseStyles = `
    
  ${classes ? classes : ""}`;

  return {
    className: nav({
      variant,
      persistOn,
      className: baseStyles,
    }),
  };
};

export const navPanelWrapper = (
  isActive: boolean,
  height = 0,
  attach: NavProps["attach"],
) => {
  return {
    className: `nav-panel-wrapper ${isActive ? "active" : ""} ${
      attach ? `attach-${attach}` : ""
    }`,
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

export const navPanel = (isActive: boolean) => ({
  className: `nav-panel ${isActive ? "active" : ""}`,
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
});

export const navItem = (
  isActive: boolean,
  itemIcons: any,
  navStyles: string,
) => {
  return {
    className: `nav-item 
    ${navStyles}
    ${isActive ? "active" : ""}
    ${itemIcons?.iconPre ? "with-icon-pre" : ""}
    ${itemIcons?.iconPost ? "with-icon-post" : ""}
    `,
    variants: {
      inactive: {
        opacity: 0,
      },
      active: {
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.5,
        },
      },
    },
    whileHover: "hovered",
  };
};

export const navItemWrapper = (
  isActive: boolean,
  attach: NavProps["attach"],
) => ({
  className: `nav-item-wrapper ${attach ? "attach-to" : ""}`,
  initial: "inactive",
  animate: isActive ? "active" : "inactive",
});
