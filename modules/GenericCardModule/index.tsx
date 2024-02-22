import { FC } from "react";
import { ModuleBase, Card } from "../../components";

const GenericCardModule: FC<any> = ({ data, ...props }) => {
  if (!data) return null;

  return (
    <ModuleBase data={data} {...props}>
      <Card data={data} variant="generic" imageSizes="90vw" />
    </ModuleBase>
  );
};

export default GenericCardModule;
