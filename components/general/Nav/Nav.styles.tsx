import { cva } from "class-variance-authority";
import { NavProps } from "./Nav.types";
import {
  navItemAnimations,
  navPanelAnimations,
  navPanelWrapperAnimations,
} from "../../../theme/animations";

type NavVars = any;

// nav Variant Styles
export const nav = cva("nav", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
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
    ...navPanelWrapperAnimations(height, attach),
  };
};

export const navPanel = (isActive: boolean) => ({
  className: `nav-panel ${isActive ? "active" : ""}`,
  ...navPanelAnimations,
});

export const navItem = (
  isActive: boolean,
  itemIcons: any,
  navStyles: string,
  index = 0,
) => {
  return {
    className: `nav-item 
    ${navStyles}
    ${isActive ? "active" : ""}
    ${itemIcons?.iconPre ? "with-icon-pre" : ""}
    ${itemIcons?.iconPost ? "with-icon-post" : ""}
    `,
    ...navItemAnimations(index),
    whileHover: "hovered",
  };
};

export const navItemWrapper = (
  isActive: boolean,
  attach: NavProps["attach"],
) => ({
  className: `nav-item-wrapper ${attach && `attach-${attach}`}`,
  initial: "inactive",
  animate: isActive ? "active" : "inactive",
});
