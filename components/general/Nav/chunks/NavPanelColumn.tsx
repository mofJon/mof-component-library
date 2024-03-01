import { FC, useContext, useEffect, useRef } from "react";
import { Button, Stack } from "../../../../components";
import { NavContext, NavItemRow } from "./";
import { backButtonHeader, navPanelColumn } from "../Nav.styles";
import { useDimensions } from "../../../../hooks";

const NavPanelColumn: FC<any> = ({
  currTier,
  data,
  panelNum,
  updatePanels,
  offset,
}) => {
  const columnWrapperRef = useRef<any>(null);
  const { menuWidth, navSettings, panelWidth, setPanelWidth } =
    useContext(NavContext);
  const { icon, attachTo, motion } = navSettings[panelNum + offset];
  const { items, back } = data;
  const { width } = useDimensions(columnWrapperRef);

  useEffect(() => {
    if (panelNum === 0) {
      setPanelWidth(width);
    }
  }, [width, panelNum]);

  if (!Array.isArray(items)) return null;

  let backButton;
  if (back && attachTo === "slide") {
    backButton = (
      <Button
        variant="nav"
        text={back}
        iconPre={icon?.iconBack?.icon}
        onClick={updatePanels}
        {...backButtonHeader}
      />
    );
  }

  const renderItems = items.map((val: any, i: number) => {
    return (
      <NavItemRow
        key={`mainNav${i}`}
        data={val}
        itemIndex={i}
        isActive={data.activeIndex === i}
        updatePanels={updatePanels}
        panelNum={panelNum}
        navSettings={navSettings}
        offset={offset}
      />
    );
  });

  let panelMotion = (motion && motion?.panel) || {};
  if (motion && motion?.panel && attachTo === "stackRow" && panelNum > 0) {
    let motionWidth = offset === 0 ? menuWidth : panelWidth;

    panelMotion = motion?.panel(currTier, motionWidth, offset);
  }

  return (
    <Stack
      ref={columnWrapperRef}
      direction="column"
      {...navPanelColumn(menuWidth, attachTo)}
      {...panelMotion}
    >
      {backButton}
      {renderItems}
    </Stack>
  );
};

export default NavPanelColumn;
