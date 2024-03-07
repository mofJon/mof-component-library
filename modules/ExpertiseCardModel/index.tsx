import { FC } from "react";
import { ModuleBase, Card } from "../../components";
import { expertiseWrapper } from "./ExpertiseCardModel.styles";

const ExpertiseCardModel: FC<any> = ({ data, moduleAnims, ...props }) => {
  if (!data) return null;

  return (
    <ModuleBase
      variant="flex"
      data={data}
      {...expertiseWrapper(props, moduleAnims?.module)}
    >
      <Card data={data} variant="expertise" imageSizes="90vw" />
    </ModuleBase>
  );
};

export default ExpertiseCardModel;
