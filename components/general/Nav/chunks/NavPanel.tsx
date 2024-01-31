import { FC, useContext, useRef } from "react";
import { Box, Stack } from "../../../../components";
import { NavContext, NavPanelContent } from "./";
import { navPanel, navPanelWrapper } from "../Nav.styles";
import { NavPanelProps } from "../Nav.types";
import { useDimensions } from "../../../../hooks";

const NavPanel: FC<NavPanelProps> = ({ data, isActive = false }) => {
  const itemWrapperRef = useRef<any>(null);
  const { attach, itemsPerColumn } = useContext(NavContext);
  const { height } = useDimensions(itemWrapperRef);

  if (!Array.isArray(data)) return null;

  return (
    <Box variant="block" {...navPanelWrapper(isActive, height, attach)}>
      <Stack
        ref={itemWrapperRef}
        direction={itemsPerColumn ? "row" : "column"}
        {...navPanel(isActive)}
      >
        <NavPanelContent data={data} />
      </Stack>
    </Box>
  );
};

export default NavPanel;
