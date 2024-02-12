import { TextProps, StackProps } from "../../components";
// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";

const { modules } = twConfig?.theme?.extend;

const textStyle: TextProps["textStyle"] =
  modules?.breadCrumbsConfig?.textStyle || "i-xs";

const breadcrumbs = {
  className: "breadcrumbs-wrapper",
  direction: "row" as StackProps["direction"],
};

const breadcrumbsItem = {
  className: "breadcrumbs-item",
  textStyle,
};

const separator = {
  className: "breadcrumbs-separator",
  textStyle,
};

const activeBreadcrumbsItem = {
  className: "breadcrumbs-item active",
  textStyle,
};

export { breadcrumbs, breadcrumbsItem, activeBreadcrumbsItem, separator };
