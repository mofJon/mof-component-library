import { cva } from "class-variance-authority";
import classNames from "classnames";
import { NavProps } from "./Nav.types";

type NavVars = any;

// Nav Variant Styles
export const nav = cva("nav", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      meganav: "meganav",
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

// Nav Props
// @ts-ignore
export const navVars: NavVars = (variant, persistOn, classes) => {
  const baseStyles = classNames(classes);

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
  attach: NavProps["attach"],
  hasImage: boolean,
  level: number,
  navPanelWrapperAnimations?: any,
) => {
  const animProps = navPanelWrapperAnimations
    ? navPanelWrapperAnimations(attach)
    : {};

  return {
    className: classNames(
      "nav-panel-wrapper",
      { "with-image": hasImage },
      [`level-${level}`],
      { [`attach-${attach}`]: attach != null },
      { active: isActive },
    ),
    ...animProps,
  };
};

export const navPanel = (
  isActive: boolean,
  attach: NavProps["attach"],
  navPanelAnimations?: any,
) => {
  const animProps = navPanelAnimations ? navPanelAnimations(attach) : {};

  return {
    className: classNames("nav-panel", { active: isActive }),
    ...animProps,
  };
};

export const navItem = (
  isActive: boolean,
  itemIcons: any,
  navStyles: string,
  index = 0,
  navItemAnimations?: any,
) => {
  const animProps = navItemAnimations ? navItemAnimations(index) : {};

  return {
    className: classNames(
      "nav-item",
      [navStyles],
      { active: isActive },
      { "with-icon-pre": itemIcons?.iconPre || itemIcons?.subIconPre },
      { "with-icon-post": itemIcons?.iconPost || itemIcons?.subIconPost },
    ),
    ...animProps,
    whileHover: "hovered",
  };
};

export const navItemWrapper = (
  isActive: boolean,
  attach: NavProps["attach"],
) => ({
  className: classNames(
    "nav-item-wrapper",
    { [`attach-${attach}`]: attach != null },
    { active: isActive },
  ),
  initial: "inactive",
  animate: isActive ? "active" : "inactive",
});

export const colourSplash = (backgroundColor: string) => ({
  className: "colour-splash",
  style: {
    backgroundColor,
  } as any,
});

export const navImageWrapper = (level: number) => ({
  className: classNames("nav-image-wrapper", [`level-${level}`]),
});

export const navImage = (isActive: boolean) => ({
  className: classNames("nav-image", { active: isActive }),
});
