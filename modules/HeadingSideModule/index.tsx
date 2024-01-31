import { FC } from "react";
import { Box, ModuleBase, ContentBlock } from "../../components";
import { headingSide } from "./HeadingSideModule.styles";
import { HeadingSideModuleProps } from "./HeadingSideModule.types";

const HeadingSideModule: FC<HeadingSideModuleProps> = ({ data, ...props }) => {
  return (
    <ModuleBase {...headingSide(props.className)} data={data} {...props}>
      <Box variant="container">
        <ContentBlock data={data} variant="headingSide" />
      </Box>
    </ModuleBase>
  );
};

export default HeadingSideModule;
