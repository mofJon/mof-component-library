import classNames from "classnames";
import { isColorDark, fixColor } from "../../../utils";

export const moduleBase: any = (data: any, props?: any) => {
  const { className } = props;

  const classes = [
    "module",
    { left: props?.mediaAlignment === "Left" },
    { right: props?.mediaAlignment === "Right" },
    { portrait: props?.mediaOrientation === "Portrait" },
    { landscape: props?.mediaOrientation === "Landscape" },
    className,
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
