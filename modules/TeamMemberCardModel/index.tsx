import { FC } from "react";
import { ModuleBase, Card } from "../../components";
import { teamMemberWrapper } from "./TeamMemberCardModel.styles";
import motion from "./TeamMemberCardModel.motion";

const TeamMemberCardModel: FC<any> = ({
  data,
  index,
  moduleAnims,
  totalNum,
  ...props
}) => {
  if (!data) return null;

  let newData = Object.assign(data, {
    tag: null,
    headingTitle: `${data?.firstName}<br/>${data?.lastName}`,
  });

  return (
    <ModuleBase
      variant="flex"
      data={data}
      {...moduleAnims?.module}
      {...teamMemberWrapper(props, moduleAnims)}
      {...motion.card}
    >
      <Card
        data={newData}
        variant="teamMember"
        childAnims={moduleAnims}
        imageSizes="(max-width: 640px) 100vw, 20vw"
        size={null}
      />
    </ModuleBase>
  );
};

export default TeamMemberCardModel;
