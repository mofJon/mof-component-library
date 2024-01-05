import { cva } from "class-variance-authority";
import { StackVars } from "./Stack.types";

// stack Base and Variant Styles
export const stack = cva("stack", {
  variants: {
    intent: {
      row: ["flex", "flex-row"],
      column: ["flex", "flex-col"],
    },
  },
  defaultVariants: {
    intent: "column",
  },
});

// stack Props
export const stackVars: StackVars = (intent, gap, classes) => {
  const baseStyles = `
        gap-${gap}
        ${classes ? classes : ""}
    `;

  return {
    className: stack({
      intent,
      className: baseStyles,
    }),
  };
};
