import { forwardRef, Ref, useState } from "react";
import { navVars } from "./Nav.styles";
import { NavProps } from "./Nav.types";
import { NavContext, NavItem } from "./chunks";
import { Stack } from "../../../components";
import { remapNavData, extractAllOfType } from "../../../utils";

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
        subIconPre: null,
        subIconPost: null,
      },
      itemsPerColumn,
      isActive = true,
      navItemAnimations,
      navPanelAnimations,
      navPanelWrapperAnimations,
      navImageAnimations,
      mainNavTextStyle,
      subNavTextStyle,
      ...props
    }: NavProps,
    ref: Ref<NavProps>,
  ) => {
    const [navState, setNavState] = useState(remapNavData(data));
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const [imgProps, setImgProps] = useState({ level: 0, image: null });

    const handleCollapseSiblings = (index: number) => {
      setActiveItemIndex(index);
    };

    if (!navState || navState.length <= 0) return null;

    const images = extractAllOfType(navState, "image");

    const renderItems = navState.map((val: any, i: number) => {
      return (
        <NavItem
          key={`mainNav${i}`}
          data={val}
          itemIndex={i}
          isActive={activeItemIndex === i}
          collapseSiblings={() => handleCollapseSiblings(i)}
        />
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
          value={{
            persistOn,
            attach,
            itemsPerColumn,
            navState,
            setNavState,
            itemIcons,
            navItemAnimations,
            navPanelAnimations,
            navImageAnimations,
            mainNavTextStyle,
            subNavTextStyle,
            images,
            imgProps,
            setImgProps,
          }}
        >
          {renderItems}
        </NavContext.Provider>
      </Stack>
    );
  },
);

Nav.displayName = "Nav";
