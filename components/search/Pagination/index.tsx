import { FC } from "react";
import { Button, Stack, Text } from "../../../components";
import { getFormattedValue } from "../../../utils";
import { useRouter, useSearchParams } from "next/navigation";
import {
  paginationWrapper,
  paginationStepsWrapper,
  paginationBack,
  paginationDivider,
  paginationNext,
  paginationStep,
} from "./Pagination.styles";

const buttonVars = {
  back: "iconBack",
  next: "iconNext",
  Pagination: "pagination",
};

const Pagination: FC<any> = ({
  totalPages = 1,
  currentPage = 1,
  buttonVariants = buttonVars,
  paginationType = "leadingZeroNumbers",
  textStyles,
  motion,
}) => {
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();

  if (totalPages === 1) return;

  const handlePaginate = (nextPagenum: number) => {
    searchParams.set("page", `${nextPagenum}`);
    router.push(`?${searchParams}`);
  };

  const renderStepButtons = [
    currentPage < totalPages - 2 || totalPages < 4
      ? currentPage
      : currentPage - 2,
    currentPage + 1 < totalPages - 1 || totalPages < 4
      ? currentPage + 1
      : currentPage - 1,
    currentPage + 2 < totalPages || totalPages < 4
      ? currentPage + 2
      : currentPage,
    0,
    totalPages,
  ].map((val: number, index: number) => {
    if ((val - 2 > totalPages || totalPages <= index) && index < 3) return;
    if ((totalPages < 4 || currentPage >= totalPages) && index > 2) return;

    if (index === 3)
      return (
        <Text
          key={`paginationDivider`}
          text="..."
          {...textStyles}
          {...paginationDivider(motion?.paginationChild)}
        />
      );

    return (
      <Button
        key={`paginationStepButton${val}`}
        variant="paginate"
        text={getFormattedValue(val - 1, paginationType) as string}
        onClick={() => handlePaginate(val)}
        {...paginationStep(val === currentPage, motion?.paginationChild)}
      />
    );
  });

  return (
    <Stack direction="row" {...paginationWrapper(motion?.paginationWrapper)}>
      {currentPage > 1 && (
        <Button
          variant={buttonVariants?.back}
          onClick={() => handlePaginate(currentPage - 1)}
          {...paginationBack(motion?.paginationChild)}
        />
      )}
      <Stack direction="row" {...paginationStepsWrapper}>
        {renderStepButtons}
      </Stack>
      {currentPage <= totalPages - 1 && (
        <Button
          variant={buttonVariants?.next}
          onClick={() => handlePaginate(currentPage + 1)}
          {...paginationNext(motion?.paginationChild)}
        />
      )}
    </Stack>
  );
};
export default Pagination;
