import { FC } from "react";
import { ModuleBase, Card } from "../../components";
import motion from "./GenericCardModule.motion";

const GenericCardModule: FC<any> = ({ data, ...props }) => {
  if (!data) return null;

  return (
    <ModuleBase data={data} {...motion.card}>
      <Card data={data} variant="generic" imageSizes="90vw" />
    </ModuleBase>
  );
};

export default GenericCardModule;
