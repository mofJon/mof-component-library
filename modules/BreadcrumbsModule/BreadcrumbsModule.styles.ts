import { TextProps, StackProps } from "../../components";

const breadcrumbs = {
  className: "breadcrumbs-wrapper",
  direction: "row" as StackProps["direction"],
};

const breadcrumbsItem = (textStyle: TextProps["textStyle"]) => ({
  className: "breadcrumbs-item",
  textStyle,
});

const separator = (textStyle: TextProps["textStyle"]) => ({
  className: "breadcrumbs-separator",
  textStyle,
});

const activeBreadcrumbsItem = (textStyle: TextProps["textStyle"]) => ({
  className: "breadcrumbs-item active",
  textStyle,
});

export { breadcrumbs, breadcrumbsItem, activeBreadcrumbsItem, separator };
