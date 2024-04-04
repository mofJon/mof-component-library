"use client";
import { FC, useState } from "react";
import { ModuleBase, Pagination, SearchFilters, Stack } from "../../components";
import { CardListingFetcher } from "./chunks";
import { HeadingSideModule } from "../../modules";
import { gridWrapper, moduleWrapper } from "./CardListingGridModule.styles";
import { CardListingGridModuleProps } from "./CardListingGridModule.types";
// import { getCardListingData } from "./CardListingGridModule.actions";
import { useSearchParams } from "next/navigation";

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  moduleAnims,
  getItems = (items?: any) => [],
  getQueryData = (props: Record<any, any>) => {},
  textStyles,
  icons,
  paginationButtonVariants,
  // searchParams,
  paginationType,
  showMoreText,
  ...props
}) => {
  if (!data || !data?.filtersAndCards) return null;
  // const fetchController = useRef(null);
  const searchParams = useSearchParams();

  console.log("saerchParams", searchParams);

  const {
    cards,
    cardType,
    currentPage = Number(searchParams?.page) || 1,
    displayFilters,
    filter,
    totalCount,
    totalPages,
    pageSize,
    sortByOptions,
  } = data?.filtersAndCards;
  const [filteredCards, setFilteredCards] = useState<any[]>(cards);
  const [currPage, setCurrPage] = useState<number>(currentPage);
  const [currFilters, setCurrFilters] = useState<any>([]);
  const [currTotal, setCurrTotal] = useState<number>(totalPages);

  const isGroup = cards[0].moduleName.includes("Group");

  const handleUpdateFromServer = (data: any) => {
    setFilteredCards(data?.cards);
    setCurrPage(data?.currentPage);
    setCurrFilters(data?.currFilters);
    setCurrTotal(data?.totalPages);
  };

  const headingData = {
    description: data?.description,
    headingTitle: data?.headingTitle,
    tag: data?.tag,
  };

  return (
    <ModuleBase
      data={data}
      {...moduleWrapper(props, cardType)}
      {...moduleAnims?.module}
    >
      <HeadingSideModule
        variant="flex"
        data={headingData}
        moduleAnims={moduleAnims?.headingSide}
      />
      <Stack direction="column" {...gridWrapper(moduleAnims?.gridWrapper)}>
        {displayFilters && (
          <SearchFilters
            filters={data?.filtersAndCards?.filter}
            icons={icons}
            textStyles={textStyles}
          />
        )}
        <CardListingFetcher
          moduleAnims={moduleAnims}
          searchParams={searchParams}
          cardType={cardType}
          isGroup={isGroup}
          filter={filter}
          paginationType={paginationType}
          currFilters={currFilters}
          currPage={currPage}
          pageSize={pageSize}
          displayFilters={displayFilters}
          sortByOptions={sortByOptions}
          getQueryData={getQueryData}
          items={getItems(filteredCards, isGroup)}
          onUpdate={handleUpdateFromServer}
        />
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          totalPages={currTotal}
          currentPage={currPage}
          buttonVariants={paginationButtonVariants}
          paginationType={paginationType}
          showMoreText={showMoreText}
          textStyles={textStyles}
        />
      </Stack>
    </ModuleBase>
  );
};

export default CardListingGridModule;
