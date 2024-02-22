import classnames from "classnames";

export const RichTextAndOneMedia = (data: any, className?: string) => ({
  className: classnames([
    "rich-text-and-one-media",
    [data?.mediaAlignment?.toLowerCase()],
    [data?.mediaOrientation?.toLowerCase()],
    className,
  ]),
});
