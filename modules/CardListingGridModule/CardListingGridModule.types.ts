export type CardListingGridModuleProps = {
  data: any;
  moduleAnims?: any;
  getItems?: (items?: any, isGroup?: boolean) => any;
  getQueryData?: (
    filters: any,
    pageNumber: number,
    cardsType: string,
    pageSize: number,
    displayFilters: boolean,
    orderBy: any[],
  ) => any;
  textStyles?: any;
  icons?: any;
  paginationButtonVariants?: any;
};
