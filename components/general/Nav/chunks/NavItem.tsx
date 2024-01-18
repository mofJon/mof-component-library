import { FC, useCallback, useContext, useState } from "react";
import { Button, Stack } from "@/components";
import { useRouter } from "next/navigation";
import { NavContext, NavPanel } from "./";
import { navItem, navItemWrapper } from "../Nav.styles";
import { NavItemProps } from "../Nav.types";
import { updateNavState } from "@/utils";

const NavItem: FC<NavItemProps> = ({
  data,
  level = 0,
  itemIcons,
  itemIndex,
  ...props
}) => {
  const { navState, setNavState, attach } = useContext(NavContext);
  const { isGroup, navTitle, navLink, navItems, isActive, navStyle } = data;
  const router = useRouter();

  const handleClick = useCallback(() => {
    console.log(data);
    if (data.isGroup) {
      const newState = updateNavState(navState, "isActive", data.index);
      setNavState(newState);
    } else {
      navLink && router.push(navLink);
    }
  }, [navState, setNavState, data, router]);

  const item = (
    <Button
      text={navTitle}
      onClick={handleClick}
      variant="nav"
      iconPre={itemIcons?.iconPre}
      iconPost={itemIcons?.iconPost}
      {...navItem(isActive, itemIcons, navStyle)}
      {...props}
    />
  );

  if (navItems && navItems.length > 0) {
    return (
      <Stack direction="column" {...navItemWrapper(isActive, attach)}>
        {item}
        <NavPanel
          data={navItems}
          level={level + 1}
          itemIcons={itemIcons}
          itemIndex={itemIndex}
          isActive={isActive}
        />
      </Stack>
    );
  }

  return item;
};

export default NavItem;
