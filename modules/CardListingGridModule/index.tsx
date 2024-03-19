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

const CardListingGridModule: FC<CardListingGridModuleProps> = ({
  data,
  moduleAnims,
  getItems = (items?: any) => [],
  getQueryData = (filters: any, page: number) => {},
  textStyles,
  icons,
  paginationButtonVariants,
  searchParams,
  ...props
}) => {
  if (!data && !data?.filtersAndCards) return null;
  const fetchController = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  // const searchParams = new URLSearchParams(useSearchParams());
  const currentPage = Number(searchParams?.page) || 1;

  const [isInit, setIsInit] = useState(true);

  console.log("CL currentPage", currentPage);

  const {
    cards,
    cardType,
    // currentPage,
    displayFilters,
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
    if (isInit) return;

    const { query, fetchUrl } = getQueryData(
      selectedFilters,
      currentPage,
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
  }, [selectedFilters, currentPage]);

  const handleFilterChange = (value: any) => {
    setIsInit(false);
    const newSelectedFilters = [...selectedFilters];
    const cleanedFilters = newSelectedFilters.filter(
      (filter) => filter.fieldName !== value.fieldName,
    );

    setSelectedFilters([...cleanedFilters, value]);
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
          currentPage={currentPage}
          buttonVariants={paginationButtonVariants}
        />
      </Stack>
    </ModuleBase>
  );
};

export default CardListingGridModule;
