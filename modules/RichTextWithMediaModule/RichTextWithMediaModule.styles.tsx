import classnames from "classnames";

export const richTextWithMedia = (props: any) => ({
  className: classnames(["rich-text-with-media", props.className]),
});

export const richTextContent = {
  className: "rich-text-content",
  rich: true,
};
