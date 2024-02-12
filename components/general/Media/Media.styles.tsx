import classNames from "classnames";

export const mediaHolder = (size: any, align: any, orientation: any) => {
  return {
    className: classNames("media-holder", [size], [align], [orientation]),
  };
};
