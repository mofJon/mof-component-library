import classNames from "classnames";
// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";

// @ts-ignore - get styles from tailwind config
const theme = twConfig?.theme?.extend;
const accordionTextStyles = theme?.modules?.accordion;
const titleStyles = accordionTextStyles?.itemTitle || {};
const copyStyles = accordionTextStyles?.itemCopy || {};

export const accordionWrapper = (childAnims: any, props: any) => ({
  className: classNames("accordion", props.className),
  ...childAnims.accordionMain,
});

export const accordionTag = (childAnims: any) => ({
  textStyle: "p-sm",
  ...(accordionTextStyles?.tag || {}),
  ...childAnims.accordionTag,
});

export const accordionHeading = (childAnims: any) => ({
  textStyle: "h1",
  ...(accordionTextStyles?.heading || {}),
  ...childAnims.accordionHeading,
});

export const accordionItemTitle = {
  textStyle: "h3",
  ...titleStyles,
};

export const accordionItemCopy = {
  textStyle: "h4",
  ...copyStyles,
};
