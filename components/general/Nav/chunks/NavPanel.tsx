import { FC, useContext, useMemo, useRef } from "react";
import { Box, Stack } from "../../../../components";
import { NavContext, NavImages, NavPanelContent } from "./";
import { navPanel, navPanelWrapper } from "../Nav.styles";
import { NavPanelProps } from "../Nav.types";
import { AnimatePresence } from "framer-motion";

const NavPanel: FC<NavPanelProps> = ({
  data,
  image,
  isActive = false,
  level = 0,
  attach,
}) => {
  const itemWrapperRef = useRef<any>(null);
  const {
    itemsPerColumn,
    navPanelAnimations,
    navPanelWrapperAnimations,
    navImageAnimations = {},
    images,
  } = useContext(NavContext);

  if (!Array.isArray(data)) return null;

  return (
    <AnimatePresence>
      <Box
        variant="block"
        {...navPanelWrapper(
          isActive,
          attach,
          image != null,
          level,
          navPanelWrapperAnimations,
        )}
      >
        <Stack
          ref={itemWrapperRef}
          direction={itemsPerColumn ? "row" : "column"}
          {...navPanel(isActive, attach, navPanelAnimations)}
        >
          <NavPanelContent data={data} />
        </Stack>
        {level === 0 && <NavImages images={images} />}
      </Box>
    </AnimatePresence>
  );
};

export default NavPanel;
