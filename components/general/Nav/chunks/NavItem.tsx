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
  ...props
}) => {
  const { navState, setNavState, attach, persistOn } = useContext(NavContext);
  const { navTitle, navLink, navItems, isActive, navStyle } = data;
  const router = useRouter();

  const updateNav = () => {
    const newState = updateNavState(
      navState,
      "isActive",
      data.index,
      persistOn,
    );
    setNavState(newState);
  };

  const handleClick = useCallback(() => {
    if (data.isGroup) {
      persistOn !== "hover" && updateNav();
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
      {...navItem(isActive, itemIcons, navStyle, data.index)}
      {...props}
    />
  );

  if (navItems && navItems.length > 0) {
    return (
      <Stack
        direction="column"
        {...navItemWrapper(isActive, attach)}
        onMouseEnter={() => persistOn === "hover" && updateNav()}
        onMouseLeave={() => persistOn === "hover" && updateNav()}
      >
        {item}
        <NavPanel
          data={navItems}
          level={level + 1}
          itemIcons={itemIcons}
          itemIndex={data.index}
          isActive={isActive}
        />
      </Stack>
    );
  }

  return item;
};

export default NavItem;
