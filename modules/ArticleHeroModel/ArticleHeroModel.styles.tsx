import classnames from "classnames";

export const RichTextAndOneMedia = (mediaAlignment: string, props: any) => ({
  className: classnames([
    "rich-text-and-one-media",
    mediaAlignment?.toLowerCase(),
    props.className,
  ]),
});
