import classNames from "classnames";
import { isColorDark, fixColor } from "../../../utils";

export const moduleBase: any = (data: any, props?: any) => {
  const classes = [
    "module",
    [data?.mediaAlignment?.toLowerCase()],
    [data?.mediaOrientation?.toLowerCase()],
    [`pt-${data?.paddingTop?.toLowerCase() || 0}`],
    [`pb-${data?.paddingBottom?.toLowerCase() || 0}`],
    props?.className,
  ];
  const backgroundColor = fixColor(data?.backgroundColour);

  classes.push(
    isColorDark(backgroundColor)
      ? "[&_.color-from-bg]:text-white"
      : "[&_.color-from-bg]:text-black",
  );

  return {
    id: data?.anchor || null,
    className: classNames(classes),
    style: {
      backgroundColor,
    },
  };
};
