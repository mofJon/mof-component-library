import { FC } from "react";
import { ModuleBase, Card } from "../../components";
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
      <Card
        data={data}
        variant="headingVerticallyStacked"
        childAnims={moduleAnims}
      />
    </ModuleBase>
  );
};

export default HeadingVerticallyStackedModule;
