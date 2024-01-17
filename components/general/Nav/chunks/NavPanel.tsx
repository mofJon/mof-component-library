import { FC, useContext, useRef } from "react";
import { Box, Stack } from "@/components";
import { NavContext, NavItem } from "./";
import { navPanel, navPanelWrapper } from "../Nav.styles";
import { NavPanelProps } from "../Nav.types";
import { splitArrayIntoChunks } from "@/utils";
import { useDimensions } from "@/hooks";
import { AnimatePresence } from "framer-motion";

const NavPanel: FC<NavPanelProps> = ({
  data,
  itemIcons,
  isActive = false,
  itemIndex,
  level,
}) => {
  const itemWrapperRef = useRef<any>(null);
  const { attach, itemsPerColumn } = useContext(NavContext);
  const { height } = useDimensions(itemWrapperRef);

  if (!Array.isArray(data)) return null;

  return (
    <Box variant="block" {...navPanelWrapper(isActive, height)}>
      <Stack
        ref={itemWrapperRef}
        direction={itemsPerColumn ? "row" : "column"}
        {...navPanel(isActive)}
      >
        {renderColumns(
          data,
          itemsPerColumn,
          itemIcons,
          level,
          itemIndex,
          isActive,
        )}
      </Stack>
    </Box>
  );
};

export default NavPanel;

const renderItems: any = (
  data: any,
  itemIcons: any,
  level: number,
  itemIndex: number,
  panelIndex: "",
  isActive: boolean,
) => {
  return data.map((val: any, index: number) => {
    return (
      <NavItem
        key={`nav-item${level}_${itemIndex}_${panelIndex}_${index}`}
        data={val}
        {...itemIcons}
        itemIndex={index}
        isActive={isActive}
        panelIndex={panelIndex}
      />
    );
  });
};

const renderColumns: any = (
  data: any,
  itemsPerColumn: number | undefined,
  itemIcons: any,
  level: number,
  itemIndex: number,
  isActive: boolean,
) => {
  if (itemsPerColumn) {
    const columns = splitArrayIntoChunks(data, itemsPerColumn);

    return columns.map((column, index: number) => {
      return (
        <Stack key={`column${level}_${itemIndex}_${index}`} direction="column">
          {renderItems(column, itemIcons, level, itemIndex, index, isActive)}
        </Stack>
      );
    });
  }

  return renderItems(data, itemIcons, level, itemIndex, isActive);
};
