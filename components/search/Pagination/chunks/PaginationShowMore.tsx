import { FC } from "react";
import { Text } from "../../../../components";
import { paginationShowMore } from "../Pagination.styles";

const PaginationShowMore: FC<any> = ({
  totalPages = 1,
  currentPage = 1,
  showMoreText = "Show more",
  textStyles,
  motion,
  onChange,
}) => {
  if (totalPages === currentPage) return null;

  return (
    <Text
      text={showMoreText}
      textStyle={textStyles?.showMore}
      {...paginationShowMore(motion?.showMore)}
      onClick={() => onChange(currentPage + 1)}
    />
  );
};
export default PaginationShowMore;
