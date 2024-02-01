import { FC, useRef } from "react";
import { Box, ModuleBase } from "../../components";
import {} from "./CardListingGridModule.styles";
import { CardListingGridModuleProps } from "./CardListingGridModule.types";
import { useDimensions } from "../../hooks";

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  ...props
}) => {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  return (
    <ModuleBase data={data}>
      <Box variant="container"></Box>
    </ModuleBase>
  );
};

export default CardListingGridModule;
