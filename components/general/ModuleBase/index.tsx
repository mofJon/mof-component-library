import { FC } from "react";
import { Box } from "../../../components";
import { moduleBase } from "./ModuleBase.styles";
import { ModuleBaseProps } from "./ModuleBase.types";

const ModuleBase: FC<ModuleBaseProps> = ({
  data,
  variant = "section",
  ...props
}) => {
  return <Box variant={variant} {...props} {...moduleBase(data, props)} />;
};

export default ModuleBase;
