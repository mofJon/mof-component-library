import { forwardRef, Ref } from "react";
import { Stack, Button } from "../../../components";
import { buttonGroupVars } from "./ButtonGroup.styles";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { useRouter } from "next/navigation";

export const ButtonGroup = forwardRef(
  (
    {
      direction = "row",
      primaryProps,
      secondaryProps,
      ...props
    }: ButtonGroupProps,
    ref: Ref<ButtonGroupProps>,
  ) => {
    const router = useRouter();

    const handleClick = (variant: string) => {
      const url =
        variant === "primary" ? primaryProps.href : secondaryProps.href;
      if (url) router.push(url);
    };

    const allProps = {
      ...buttonGroupVars(direction, props.className),
      ...props,
      direction,
    };

    return (
      <Stack {...allProps}>
        <Button onClick={() => handleClick("primary")} {...primaryProps} />
        <Button onClick={() => handleClick("secondary")} {...secondaryProps} />
      </Stack>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
