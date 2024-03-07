import { useState } from "react";
import { Popover, Stack, Text } from "../../../components";
import { getOptionLabel } from "../../../utils";
import { dropdownOption } from "./DropdownFilter.styles";

const DropdownFilter = ({
  filter,
  value,
  selectedFilters,
  onChange,
  icons,
  textStyles,
  ...props
}) => {
  const options = filter?.filters || [];
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (checked, selectedValue) => {
    let newSelected = selectedFilters ? [...selectedFilters] : [];

    checked
      ? !newSelected.includes(selectedValue) && newSelected.push(selectedValue)
      : newSelected.splice(newSelected.indexOf(selectedValue), 1);

    onChange(filter?.filterValue, newSelected);
    setIsChecked(checked);
  };

  const title = getOptionLabel(filter.filterName, options, selectedFilters);

  return (
    <Popover title={title} icons={icons} {...props}>
      {options.map((option) => {
        const isChecked = selectedFilters.includes(option.filterGuid);
        return (
          <Stack
            direction="row"
            key={option.filterGuid}
            {...dropdownOption(isChecked)}
            onClick={() => handleOnChange(!isChecked, option.filterGuid)}
          >
            <Text text={option.name} {...textStyles?.option} />
            {icons?.checked}
          </Stack>
        );
      })}
    </Popover>
  );
};
export default DropdownFilter;
