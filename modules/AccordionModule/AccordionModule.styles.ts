import classNames from "classnames";

export const accordionWrapper = (childAnims: any, props: any) => ({
  className: classNames("accordion", props.className),
  ...childAnims.accordionMain,
});

export const accordionTag = (textStyle: string, childAnims: any) => ({
  textStyle,
  ...childAnims.accordionTag,
});

export const accordionHeading = (textStyle: string, childAnims: any) => ({
  textStyle,
  ...childAnims.accordionHeading,
});
