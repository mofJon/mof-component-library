import { forwardRef, Ref } from "react";
import { Stack, Button, ShareTooltip } from "../../../components";
import { buttonGroupVars } from "./ButtonGroup.styles";
import { ButtonGroupProps } from "./ButtonGroup.types";

export const ButtonGroup = forwardRef(
  (
    {
      direction = "row",
      primaryProps,
      secondaryProps,
      shareData,
      ...props
    }: ButtonGroupProps,
    ref: Ref<ButtonGroupProps>,
  ) => {
    if (!primaryProps?.href && !secondaryProps?.href && !shareData) return null;

    const allProps = {
      ...buttonGroupVars(direction, props.className),
      ...props,
      direction,
    };

    return (
      <Stack {...allProps}>
        {primaryProps?.href && <Button {...primaryProps} />}
        {secondaryProps?.href && <Button {...secondaryProps} />}
        {shareData && <ShareTooltip data={shareData} />}
      </Stack>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
