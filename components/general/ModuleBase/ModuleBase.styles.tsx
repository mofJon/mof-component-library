import classNames from "classnames";
import { isColorDark, fixColor } from "../../../utils";

export const moduleBase: any = (data: any, props?: any) => {
  const classes = [
    "module",
    { left: data?.mediaAlignment === "Left" },
    { right: data?.mediaAlignment === "Right" },
    { portrait: data?.mediaOrientation === "Portrait" },
    { landscape: data?.mediaOrientation === "Landscape" },
    props?.className,
  ];
  const backgroundColor = fixColor(data?.backgroundColour);

  data.paddingTop &&
    data.paddingTop !== "None" &&
    classes.push(`pt-${data.paddingTop.toLowerCase()}`);

  data.paddingBottom &&
    data.paddingBottom !== "None" &&
    classes.push(`pb-${data.paddingBottom.toLowerCase()}`);

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
