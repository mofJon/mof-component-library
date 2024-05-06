import { FC } from "react";
import { Button, Text } from "../../../../components";
import { getFormattedValue } from "../../../../utils";
import { paginationDivider, paginationStep } from "../Pagination.styles";

interface IPaginationSteps {
  totalPages: number;
  currentPage: number;
  paginationType?: any;
  textStyles?: any;
  motion?: any;
  onChange?: (val: any) => void;
}

const PaginationSteps: FC<IPaginationSteps> = ({
  totalPages = 1,
  currentPage = 1,
  paginationType = "leadingZeroNumbers",
  textStyles,
  motion,
  onChange,
}) => {
  const renderStepButtons = () => {
    let paginationSteps: number[] = [];

    if (totalPages > 4 && currentPage > totalPages - 2) {
      paginationSteps = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      for (
        let i = currentPage;
        i <= Math.min(currentPage + 2, totalPages);
        i++
      ) {
        paginationSteps.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      paginationSteps.push(0);
      paginationSteps.push(totalPages);
    }

    return paginationSteps.map((val: number, index: number) => {
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
          onClick={() => onChange && onChange(val)}
          {...paginationStep(val === currentPage, motion?.paginationChild)}
        />
      );
    });
  };

  return renderStepButtons();
};
export default PaginationSteps;
