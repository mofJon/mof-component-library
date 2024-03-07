import React, { useState, useEffect } from "react";
import { DropdownFilter, Stack } from "../../../components";
import { filterWrapper } from "./SearchFilters.styles";
import { arrayFromStringList } from "../../../utils";
import { useRouter, useSearchParams } from "next/navigation";

const SearchFilters = ({ filters, onChange, textStyles, icons, ...props }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();

  useEffect(() => {
    const filters = searchParams.get("filterid");
    const filterArray = arrayFromStringList(filters);
    setSelectedFilters(filterArray);
  }, []);

  /* selectedFilters is an array of all available filter ids across filter dropdowns
   * handleOnChange determines which of these active IDs belong to which category and sends it back
   */

  const handleOnChange = (fieldName, selected) => {
    if (selected !== selectedFilters) {
      // searchParams.delete("filterid");
      // selected.forEach((id) => searchParams.append("filterid", id));
      // router.push(`?${searchParams}`);
      setSelectedFilters(selected);
      const filterCategory = filters.filter((f) => f.filterValue === fieldName);
      const filterCategoryGuIds = filterCategory[0].filters.map(
        (f) => f.filterGuid,
      );
      const fieldGuIds = selected.filter((f) =>
        filterCategoryGuIds.includes(f),
      );
      onChange({ fieldName, fieldGuIds });
    }
  };

  if (!filters) return;
  return (
    <Stack {...filterWrapper}>
      {filters.map((filter, index) => (
        <DropdownFilter
          key={`filter${index}`}
          selectedFilters={selectedFilters}
          filter={filter}
          onChange={handleOnChange}
          icons={icons}
          textStyles={textStyles}
        />
      ))}
    </Stack>
  );
};
export default SearchFilters;
