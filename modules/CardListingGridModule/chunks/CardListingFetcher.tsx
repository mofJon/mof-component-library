"use server";
import { CardListingConsumer } from "./";
import { getCardListingData } from "../CardListingGridModule.actions";

const CardListingFetcher = ({
  isGroup,
  items,
  cardType,
  moduleAnims,
  onUpdate,
  filter,
  paginationType,
  currFilters,
  currentPage,
  displayFilters,
  pageSize,
  sortByOptions,
  getQueryData,
  filteredCards,
  searchParams,
}: any) => {
  const fetchController = null;

  const allFilters = searchParams.getAll("filterid");
  const searchPage: number = parseInt(searchParams.get("page") || "1");

  console.log("searchparamsPage", searchPage);
  console.log("searchparamsfilters", allFilters);

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

  const fetchData = async () => {
    const { query, fetchUrl }: any = await getQueryData({
      filters,
      fetchPage,
      cardType,
      pageSize,
      displayFilters,
      sortByOptions,
      currentPage: fetchPage,
    });

    await getCardListingData(fetchController, query, fetchUrl).then((res) => {
      let cards = [];
      // if load more and pageNumber++ append cards to list, otherwise replace
      if (paginationType === "showMore" && searchPage < currentPage) {
        cards = [...filteredCards, ...res.cards];
      } else {
        cards = res.cards;
      }

      console.log("cards", cards);
      console.log("query", query);
      console.log("fetchUrl", fetchUrl);

      onUpdate({
        cards,
        currFilters: allFilters,
        currentPage,
        totalPages: res.totalPages,
      });
    });
  };

  fetchData().catch((error) => console.warn(error));

  return (
    <CardListingConsumer
      isGroup={isGroup}
      items={items}
      cardType={cardType}
      moduleAnims={moduleAnims}
    />
  );
};

export default CardListingFetcher;
