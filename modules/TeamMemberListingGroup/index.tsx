import { FC } from "react";
import {
  Box,
  ListingGrid,
  ModuleBase,
  Text,
  CMSModule,
} from "../../components";
import { MagicMotion, MagicExit } from "react-magic-motion";
import { cardsHolder } from "./TeamMemberListingGroup.styles";

const TeamMemberListingGroup: FC<any> = ({
  data,
  index,
  moduleAnims,
  totalNum,
  textStyles,
  ...props
}) => {
  if (!data) return null;

  const renderCards = (data: any) => {
    if (!data) return [];

    return data.map((card: any, index: number) => {
      // console.log(data, card);

      return (
        <CMSModule
          key={`${card.moduleId}_cardId-${index}`}
          module={card}
          isListingCard
        />
      );
    });
  };
  return (
    <ModuleBase data={data} {...moduleAnims?.module}>
      <Text text={data?.categoryName} textStyle="h2" />
      <ListingGrid
        data={renderCards(data?.people)}
        type={"TeamMemberCardModel"}
      />
    </ModuleBase>
  );
};

export default TeamMemberListingGroup;
