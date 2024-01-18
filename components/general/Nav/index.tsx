import { forwardRef, Ref, useState } from "react";
import { navVars } from "./Nav.styles";
import { NavProps } from "./Nav.types";
import { NavContext, NavItem } from "./chunks";
import { Stack } from "@/components";
import { remapNavData, updateNavState } from "@/utils";

export const Nav: NavProps = forwardRef(
  (
    {
      className,
      variant = "primary",
      direction = "row",
      persistOn = "all",
      attach,
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
    const [navState, setNavState] = useState(remapNavData(data));

    if (!navState || navState.length <= 0) return null;

    const renderItems = navState.map((val: any, i: number) => {
      return (
        <NavItem key={`mainNav${i}`} data={val} {...itemIcons} itemIndex={i} />
      );
    });

    const allProps = {
      ...navVars(variant, persistOn, className),
      ...props,
      direction,
    };

    return (
      <Stack ref={ref} {...allProps}>
        <NavContext.Provider
          value={{ persistOn, attach, itemsPerColumn, navState, setNavState }}
        >
          {renderItems}
        </NavContext.Provider>
      </Stack>
    );
  },
);

Nav.displayName = "Nav";
