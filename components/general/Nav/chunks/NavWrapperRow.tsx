import { FC, useContext, useEffect, useState } from "react";
import { Stack } from "../../../../components";
import { NavContext, NavPanelColumn, NavImages } from "./";
import { navPanelWrapperRow } from "../Nav.styles";

const NavWrapperRow: FC<any> = ({ data, isOpen, offset = 0 }) => {
  const { images, menuWidth, navSettings } = useContext(NavContext);
  const [panels, setPanels] = useState([{ items: data, back: null }]);
  const currTier = panels.length - 1 || 0;
  const { motion, attachTo } = navSettings[currTier + offset];

  const handleUpdatePanels = (data?: any) => {
    if (data?.items) {
      setPanels([...panels, data]);
    } else {
      let newPanels = [...panels];
      newPanels.pop();
      setPanels(newPanels);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        const newPanels = panels.slice(0, 1);
        setPanels(newPanels);
      }, 500);
    }
  }, [isOpen]);

  const renderColumns = panels.map((val: any, i: number) => {
    return (
      <NavPanelColumn
        key={`navPanel${i}`}
        data={val}
        panelNum={i}
        updatePanels={handleUpdatePanels}
        currTier={currTier}
        offset={offset}
      />
    );
  });

  let panelMotion = (motion && motion?.panelWrapper) || {};
  if (motion && motion?.panelWrapper && attachTo === "slide") {
    panelMotion = motion?.panelWrapper(menuWidth, currTier);
  }

  return (
    <Stack {...panelMotion} {...navPanelWrapperRow}>
      {renderColumns}
      {attachTo !== "slide" && <NavImages images={images} />}
    </Stack>
  );
};

export default NavWrapperRow;
