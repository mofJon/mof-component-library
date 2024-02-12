import { FC, useCallback, useContext, useEffect, useState } from "react";
import { Box, Button, Media, Stack } from "../../../../components";
import { useRouter } from "next/navigation";
import { NavContext, NavPanel } from "./";
import { colourSplash, navItem, navItemWrapper } from "../Nav.styles";
import { NavItemProps, NavInteractionType } from "../Nav.types";

const NavItem: FC<NavItemProps> = ({
  data,
  isActive: isActiveInGroup = false,
  collapseSiblings,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [hoverLevel, setHoverLevel] = useState(false);
  const {
    navState,
    setNavState,
    attach,
    persistOn,
    navItemAnimations,
    setImgProps,
    itemIcons,
    mainNavTextStyle,
    subNavTextStyle,
  } = useContext(NavContext);
  const { navItemText, navItemLink, navItems, navStyle, level, colour, image } =
    data;
  const router = useRouter();
  const hasChildren = navItems && navItems.length > 0;

  const handleInteraction = useCallback(
    (event: MouseEvent, interaction: NavInteractionType) => {
      if (hasChildren) {
        if (interaction === "hover" && persistOn === "hover") {
          setIsActive(true);
        } else if (interaction === "hoverOut" && persistOn === "hover") {
          setIsActive(false);
        }

        if (interaction === "click" && persistOn !== "hover") {
          event.preventDefault();
          setIsActive(!isActive);
          collapseSiblings && collapseSiblings();
        }
      } else if (interaction === "click") {
        collapseSiblings && collapseSiblings();
        navItemLink && router.push(navItemLink.href);
      }
    },
    [navState, setNavState, data, router, isActive],
  );

  const handleHover = useCallback(() => {
    setImgProps({ level, image, imageAvail: data.image });
  }, []);

  useEffect(() => {
    if (!isActiveInGroup) {
      setIsActive(false);
    }
  }, [isActiveInGroup]);

  const isTotallyActive =
    persistOn === "click" ? isActive && isActiveInGroup : isActive;

  let iconPre;
  let iconPost;
  if (hasChildren || colour) {
    iconPre = level === 0 ? itemIcons?.iconPre : itemIcons?.subIconPre;
    iconPost = level === 0 ? itemIcons?.iconPost : itemIcons?.subIconPost;
  }

  const item = (
    <Button
      text={navItemText}
      onClick={(e: any) => handleInteraction(e, "click")}
      onMouseOver={handleHover}
      variant="nav"
      iconPre={iconPre}
      iconPost={iconPost}
      {...navItem(
        isTotallyActive,
        itemIcons,
        navStyle,
        data.index,
        navItemAnimations,
      )}
      textStyle={level === 0 ? mainNavTextStyle : subNavTextStyle}
      // {...props}
    />
  );

  const attachTo = Array.isArray(attach)
    ? level < attach.length - 1
      ? attach[level]
      : attach[attach.length - 1]
    : attach;

  if (navItems && navItems.length > 0) {
    return (
      <Stack
        direction="column"
        {...navItemWrapper(isTotallyActive, attachTo)}
        onMouseEnter={(e: any) => handleInteraction(e, "hover")}
        onMouseLeave={(e: any) => handleInteraction(e, "hoverOut")}
      >
        {item}
        {colour && <Box {...colourSplash(colour)} />}
        <NavPanel
          data={navItems}
          level={level}
          itemIcons={itemIcons}
          itemIndex={data.index}
          isActive={isTotallyActive}
          attach={attachTo}
          image={image}
        />
      </Stack>
    );
  }

  return item;
};

export default NavItem;
