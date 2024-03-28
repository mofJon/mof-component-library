export type CardListingGridModuleProps = {
  data: any;
  moduleAnims?: any;
  getItems?: (items?: any, isGroup?: boolean) => any;
  getQueryData?: (
    filters: any,
    currentPage: string,
    cardsType: string,
    pageSize: number,
    displayFilters: boolean,
    orderBy: any[],
  ) => any;
  textStyles?: any;
  icons?: any;
  searchParams?: any;
  paginationButtonVariants?: any;
  paginationType?: any;
  showMoreText?: any;
};
