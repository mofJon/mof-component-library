import { forwardRef, Ref } from "react";
import { navVars } from "./Nav.styles";
import { Stack } from "@/components";
import NavItem from './chunks/NavItem';

type NavProps = any;

export const Nav = forwardRef(
  (
    {
      className,
      variant = "primary",
      direction = "row",
      persistOn = "hover", // hover | click | all
      data,
      itemIcons,
      isActive = true,
      collapsible = false,
      ...props
    }: NavProps,
    ref: Ref<NavProps>,
  ) => {
    

    if(!data || data.length <= 0 ) return null;

    const allProps = {
      ...navVars(variant, direction, className),
      ...props,
    };

    const renderItems = data.map((val: any, i: number) => {
      return <NavItem key={`mainNav${i}`} data={val} {...itemIcons} />
  })

    return (
      <Stack ref={ref} {...allProps}>
        {renderItems}
      </Stack>
    );
  },
);

Nav.displayName = "Nav";
