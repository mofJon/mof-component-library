import { FC } from "react";
import { Box, ModuleBase, ContentBlock } from "@/components";
import { headingSide } from "./HeadingSideModule.styles";
import { HeadingSideModuleProps } from "./HeadingSideModule.types";

const HeadingSideModule: FC<HeadingSideModuleProps> = ({ data, ...props }) => {
  console.log(props.className);

  return (
    <ModuleBase {...headingSide(props.className)} data={data} {...props}>
      <Box variant="container">
        <ContentBlock data={data} />
      </Box>
    </ModuleBase>
  );
};

export default HeadingSideModule;
