import { FC, useRef } from "react";
import {
  Box,
  Card,
  ModuleBase,
  // Pagination,
  // SearchFilters,
} from "../../components";
import {
  cardWrapper,
  cardHolder,
  cardExit,
  cardMotion,
  moduleWrapper,
} from "./CardListingGridModule.styles";
import { CardListingGridModuleProps } from "./CardListingGridModule.types";
import { MagicExit, MagicMotion } from "react-magic-motion";

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  moduleAnims,
  getItems = (items?: any) => [],
  ...props
}) => {
  if (!data) return null;

  const { cards, totalCount } = data?.filtersAndCards;

  return (
    <ModuleBase data={data} {...moduleWrapper(props)} {...moduleAnims?.module}>
      <Box variant="container">
        {/* @ts-ignore */}
        {/* <SearchFilters filters={data.filtersAndCards.filter} queryMode /> */}
        <MagicMotion {...cardMotion}>
          <Box {...cardHolder}>
            <MagicExit {...cardExit}>{getItems(cards)}</MagicExit>
          </Box>
        </MagicMotion>
        {/* @ts-ignore */}
        {/* <Pagination
          totalCount={totalCount}
          pageSize={data.filtersAndCards.pageSize}
          queryMode
        /> */}
      </Box>
    </ModuleBase>
  );
};

export default CardListingGridModule;
