import { FC, useEffect, useRef, useState } from "react";
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
  ...props
}) => {
  if (!data && !data?.filtersAndCards) return null;
  const fetchController = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const searchParams = new URLSearchParams(useSearchParams());

  const [isInit, setIsInit] = useState(true);

  const {
    cards,
    cardType,
    currentPage,
    displayFilters,
    totalCount,
    totalPages,
    pageSize,
    sortByOptions,
  } = data?.filtersAndCards;
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);
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
    const pageId = searchParams.get("page");

    if (pageId) {
      setSelectedPage(parseInt(pageId));
    }
  }, [searchParams]);

  useEffect(() => {
    if (isInit) return;

    const { query, fetchUrl } = getQueryData(
      selectedFilters,
      selectedPage,
      cardType,
      pageSize,
      displayFilters,
      sortByOptions,
    );

    const fetchData = async () => {
      await getCardListingData(fetchController, query, fetchUrl).then((res) => {
        setFilteredCards(res.cards);
      });
    };

    fetchData().catch(console.error);
  }, [selectedFilters, selectedPage]);

  const handleFilterChange = (value: any) => {
    setIsInit(false);
    const newSelectedFilters = [...selectedFilters];
    const cleanedFilters = newSelectedFilters.filter(
      (filter) => filter.fieldName !== value.fieldName,
    );

    setSelectedFilters([...cleanedFilters, value]);
  };

  // const handlePaginationChange = (value: any) => {
  //   setIsInit(false);
  //   console.log(value, "pagination change");
  // };

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
        {...moduleAnims?.headingSide}
      />
      <Stack direction="column" {...gridWrapper(moduleAnims?.gridWrapper)}>
        {displayFilters && (
          <SearchFilters
            filters={data?.filtersAndCards?.filter}
            onChange={handleFilterChange}
            icons={icons}
            textStyles={textStyles}
          />
        )}
        {renderCardContent}
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          totalPages={totalPages}
          currentPage={selectedPage}
          buttonVariants={paginationButtonVariants}
        />
      </Stack>
    </ModuleBase>
  );
};

export default CardListingGridModule;
