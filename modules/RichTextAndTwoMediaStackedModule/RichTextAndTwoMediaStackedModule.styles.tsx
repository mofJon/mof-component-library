import classnames from "classnames";

export const richTextAndTwoMedia = (mediaAlignment: string, props: any) => ({
  className: classnames([
    "rich-text-and-two-media",
    mediaAlignment?.toLowerCase(),
    props.className,
  ]),
});
