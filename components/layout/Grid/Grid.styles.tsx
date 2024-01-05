import { GridVars } from "./Grid.types";

// grid Props
export const gridVars: GridVars = (rows, cols, gap, classes) => {
  const baseStyles = `
        grid gap-${gap} grid-rows-${rows} grid-cols-${cols}
        ${classes ? classes : ""}
    `;

  return {
    className: baseStyles,
  };
};
