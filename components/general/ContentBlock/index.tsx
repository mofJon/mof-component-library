import { capitalise } from "@utils/formatting";
import { forwardRef, Ref } from "react";
import { ContentBlockProps } from "./ContentBlock.types";

export const ContentBlock = forwardRef(
  (
    { variant = "primary", data, ...props }: ContentBlockProps,
    ref: Ref<ContentBlockProps>,
  ) => {
    if (!data || !data.variant || !variant) return null;
    const Content = require(`./variants/${capitalise(variant)}`).default;

    return <Content ref={ref} variant={variant} data={data} {...props} />;
  },
);

ContentBlock.displayName = "ContentBlock";
