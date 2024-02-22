import { FC } from "react";
import { ModuleBase, ContentBlock } from "../../components";
import { HeadingVerticallyStackedModuleProps } from "./HeadingVerticallyStackedModule.types";
import { headingVerticallyStacked } from "./HeadingVerticallyStackedModule.styles";

const HeadingVerticallyStackedModule: FC<
  HeadingVerticallyStackedModuleProps
> = ({ data, moduleAnims, ...props }) => {
  return (
    <ModuleBase
      {...headingVerticallyStacked(props)}
      data={data}
      {...props}
      {...moduleAnims?.module}
    >
      <ContentBlock
        data={data}
        variant="headingVerticallyStacked"
        childAnims={moduleAnims}
      />
    </ModuleBase>
  );
};

export default HeadingVerticallyStackedModule;
