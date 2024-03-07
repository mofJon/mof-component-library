import classNames from "classnames";

export const headingVerticallyStacked = (props: any) => ({
  className: classNames(["heading-vertically-stacked", props.className]),
});
