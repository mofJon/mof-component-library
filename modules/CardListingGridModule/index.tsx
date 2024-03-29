import { FC, useRef, useEffect, useState } from "react";
import {
  ListingGrid,
  ModuleBase,
  Pagination,
  SearchFilters,
  Stack,
} from "../../components";
import { HeadingSideModule } from "../../modules";
import { gridWrapper, moduleWrapper } from "./CardListingGridModule.styles";
import { CardListingGridModuleProps } from "./CardListingGridModule.types";
import { getCardListingData } from "./CardListingGridModule.actions";
import { useSearchParams } from "next/navigation";

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  moduleAnims,
  getItems = (items?: any) => [],
  getQueryData = (filters: any, page: number) => {},
  textStyles,
  icons,
  paginationButtonVariants,
  searchParams,
  paginationType,
  showMoreText,
  ...props
}) => {
  if (!data || !data?.filtersAndCards) return null;
  const fetchController = useRef(null);
  const updatedParams = useSearchParams();

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
  let renderCardContent = null;
  if (filteredCards && filteredCards.length > 0) {
    renderCardContent = isGroup ? (
      getItems(filteredCards, isGroup)
    ) : (
      <ListingGrid
        data={getItems(filteredCards, isGroup)}
        type={filteredCards[0].moduleName}
        {...moduleAnims?.listingGrid}
      />
    );
  }

  useEffect(() => {
    const allFilters = updatedParams.getAll("filterid");
    const currentPage: number = parseInt(updatedParams.get("page") || "1");

    let fetchPage = currentPage;
    if (
      allFilters.length !== currFilters.length &&
      paginationType === "showMore"
    ) {
      fetchPage = 1;
    }

    const filters = filter
      .map((category: any) => {
        const fieldGuIds = category.filters
          .filter((f: any) => allFilters?.includes(f.filterGuid))
          .map((f: any) => f.filterGuid);

        if (fieldGuIds.length > 0) {
          return {
            fieldName: category.filterValue,
            fieldGuIds,
          };
        }
        return null;
      })
      .filter((f: any) => f !== null);

    const { query, fetchUrl } = getQueryData(
      filters,
      fetchPage,
      cardType,
      pageSize,
      displayFilters,
      sortByOptions,
    );

    const fetchData = async () => {
      await getCardListingData(fetchController, query, fetchUrl).then((res) => {
        // if load more and pageNumber++ append cards to list, otherwise replace
        if (paginationType === "showMore" && currPage < currentPage) {
          const updatedCards = [...filteredCards, ...res.cards];
          setFilteredCards(updatedCards);
        } else {
          setFilteredCards(res.cards);
        }
        setCurrPage(currentPage);
        setCurrFilters(allFilters);
        setCurrTotal(res.totalPages);
      });
    };

    fetchData().catch(console.error);
  }, [updatedParams]);

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
        {renderCardContent}
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
