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
import { getCardListingData } from "./CardListingFetchData";
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
    const currentPage = updatedParams.get("page") || "1";
    const allFilters = updatedParams.getAll("filterid");

    console.log(currentPage, allFilters);

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
      currentPage,
      cardType,
      pageSize,
      displayFilters,
      sortByOptions,
    );

    console.log(query, fetchUrl);

    const fetchData = async () => {
      await getCardListingData(fetchController, query, fetchUrl).then((res) => {
        setFilteredCards(res.cards);
      });
    };

    fetchData().catch(console.error);
  }, [updatedParams]);

  const updateQuery = () => {};

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
            onChange={updateQuery}
            icons={icons}
            textStyles={textStyles}
          />
        )}
        {renderCardContent}
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          totalPages={totalPages}
          currentPage={currentPage}
          buttonVariants={paginationButtonVariants}
          paginationType={paginationType}
          showMoreText={showMoreText}
          onChange={updateQuery}
        />
      </Stack>
    </ModuleBase>
  );
};

export default CardListingGridModule;
