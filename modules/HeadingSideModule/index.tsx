import { FC } from "react";
import { Box, ModuleBase, ContentBlock } from "../../components";
import { headingSide } from "./HeadingSideModule.styles";
import { HeadingSideModuleProps } from "./HeadingSideModule.types";

const HeadingSideModule: FC<HeadingSideModuleProps> = ({
  data,
  moduleAnims,
  ...props
}) => {
  return (
    <ModuleBase
      {...headingSide(props.className)}
      data={data}
      {...moduleAnims?.module}
    >
      <Box variant="container">
        <ContentBlock
          data={data}
          variant="headingSide"
          childAnims={moduleAnims}
        />
      </Box>
    </ModuleBase>
  );
};

export default HeadingSideModule;
