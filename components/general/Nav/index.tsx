import { forwardRef, Ref } from "react";
import { navVars } from "./Nav.styles";
import { NavProps } from "./Nav.types";
import { NavContext, NavItem } from "./chunks";
import { Stack } from "@/components";

export const Nav: NavProps = forwardRef(
  (
    {
      className,
      variant = "primary",
      direction = "row",
      persistOn = "all",
      attach = "bottom",
      data,
      itemIcons = {
        iconPre: null,
        iconPost: null,
      },
      itemsPerColumn,
      isActive = true,
      ...props
    }: NavProps,
    ref: Ref<NavProps>,
  ) => {
    const level = 0;
    if (!data || data.length <= 0) return null;

    const allProps = {
      ...navVars(variant, persistOn, className),
      ...props,
      direction,
    };

    const renderItems = data.map((val: any, i: number) => {
      return (
        <NavItem
          key={`mainNav${i}`}
          data={val}
          {...itemIcons}
          level={level}
          itemIndex={i}
        />
      );
    });

    return (
      <Stack ref={ref} {...allProps}>
        <NavContext.Provider value={{ persistOn, attach, itemsPerColumn }}>
          {renderItems}
        </NavContext.Provider>
      </Stack>
    );
  },
);

Nav.displayName = "Nav";
