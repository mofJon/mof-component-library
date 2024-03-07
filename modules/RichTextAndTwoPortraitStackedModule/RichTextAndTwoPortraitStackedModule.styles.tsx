import classnames from "classnames";

export const richTextAndTwoMedia = (data: any, props: any) => ({
  className: classnames([
    "rich-text-and-two-media",
    [data?.mediaAlignment?.toLowerCase()],
    [data?.mediaOrientation?.toLowerCase()],
    props.className,
  ]),
});
