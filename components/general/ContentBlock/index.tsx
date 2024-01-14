import { capitalise } from "@utils/formatting";
import { forwardRef, Ref } from "react";
import { ContentBlockProps } from "./ContentBlock.types";
import { emptyContentBlockAnim } from "@animations";

export const ContentBlock = forwardRef(
  (
    {
      variant = "primary",
      data,
      childAnims = emptyContentBlockAnim,
      ...props
    }: ContentBlockProps,
    ref: Ref<ContentBlockProps>,
  ) => {
    if (!data || !data.variant || !variant) return null;
    const Content = require(`./variants/${capitalise(variant)}`).default;

    return (
      <Content
        ref={ref}
        variant={variant}
        data={data}
        childAnims={childAnims}
        {...props}
      />
    );
  },
);

ContentBlock.displayName = "ContentBlock";
