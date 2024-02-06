import { FC, useRef } from "react";
import {
  Box,
  Card,
  ModuleBase,
  Pagination,
  SearchFilters,
} from "../../components";
import { cardHolder, moduleWrapper } from "./CardListingGridModule.styles";
import { CardListingGridModuleProps } from "./CardListingGridModule.types";
import { useDimensions } from "../../hooks";

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  ...props
}) => {
  const { cards = [], totalCount } = data?.filtersAndCards;

  const renderCards = cards.map((card: any) => (
    <Card key={card.moduleId} data={card.props} />
  ));

  return (
    <ModuleBase data={data} {...moduleWrapper(props)} {...props}>
      <Box variant="container">
        {/* @ts-ignore */}
        <SearchFilters filters={data.filtersAndCards.filter} queryMode />
        <Box {...cardHolder}>{renderCards}</Box>
        {/* @ts-ignore */}
        <Pagination
          totalCount={totalCount}
          pageSize={data.filtersAndCards.pageSize}
          queryMode
        />
      </Box>
    </ModuleBase>
  );
};

export default CardListingGridModule;
