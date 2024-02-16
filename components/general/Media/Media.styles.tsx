import classNames from "classnames";

export const mediaHolder = (
  size: any,
  align: any,
  orientation: any,
  props: any,
) => {
  return {
    className: classNames(
      "media-holder",
      [size],
      [align],
      [orientation],
      props.className,
    ),
  };
};
