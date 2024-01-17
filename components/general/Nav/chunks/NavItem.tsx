import { FC, useCallback, useContext, useState } from "react";
import { Button, Stack } from "@/components";
import { useRouter } from "next/navigation";
import { NavContext, NavPanel } from "./";
import { navItem, navItemWrapper } from "../Nav.styles";
import { NavItemProps } from "../Nav.types";

const NavItem: FC<NavItemProps> = ({
  data,
  isActive = true,
  level = 0,
  itemIcons,
  itemIndex,
  ...props
}) => {
  const { isGroup, navTitle, navLink, navItems } = data;
  const router = useRouter();
  const [showPanel, setShowPanel] = useState(false);

  const handleClick = useCallback(() => {
    if (isGroup) {
      setShowPanel(!showPanel);
    } else {
      navLink && router.push(navLink);
    }
  }, [showPanel]);

  const item = (
    <Button
      text={navTitle}
      onClick={handleClick}
      variant="nav"
      iconPre={itemIcons?.iconPre}
      iconPost={itemIcons?.iconPost}
      {...navItem(isActive, itemIcons)}
      {...props}
    />
  );

  if (navItems && navItems.length > 0) {
    return (
      <Stack direction="column" {...navItemWrapper(showPanel)}>
        {item}
        <NavPanel
          data={navItems}
          level={level + 1}
          itemIcons={itemIcons}
          itemIndex={itemIndex}
          isActive={showPanel}
        />
      </Stack>
    );
  }

  return item;
};

export default NavItem;
