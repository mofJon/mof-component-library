import classnames from "classnames";

export const RichTextAndOneMedia = (mediaAlignment: string, className?: string) => ({
  className: classnames(["rich-text-and-one-media", mediaAlignment, className]),
});
