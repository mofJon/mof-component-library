import { FC } from "react";
import { Box } from "../../../components";
import { moduleBase } from "./ModuleBase.styles";
import { ModuleBaseProps } from "./ModuleBase.types";

const ModuleBase: FC<ModuleBaseProps> = ({ data, ...props }) => {
  return (
    <Box variant="section" {...props} {...moduleBase(data, props.className)} />
  );
};

export default ModuleBase;
