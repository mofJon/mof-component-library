import React, { useState, useEffect } from "react";
import { DropdownFilter, Stack } from "../../../components";
import { filterWrapper } from "./SearchFilters.styles";
import { arrayFromStringList } from "../../../utils";
import { useSearchParams } from "next/navigation";

const SearchFilters = ({ filters, onChange, textStyles, icons }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const filters = params.get("filterid");
    const filterArray = arrayFromStringList(filters);
    setSelectedFilters(filterArray);
  }, []);

  /* selectedFilters is an array of all available filter ids across filter dropdowns
   * handleOnChange determines which of these active IDs belong to which category and sends it back
   */

  const handleOnChange = (fieldName, selected) => {
    if (selected !== selectedFilters) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("filterid");
      selected.forEach((id) => params.append("filterid", id));
      window.history.pushState(null, "", `?${params.toString()}`);
      setSelectedFilters(selected);
      // const filterCategory = filters.filter((f) => f.filterValue === fieldName);
      // const filterCategoryGuIds = filterCategory[0].filters.map(
      //   (f) => f.filterGuid,
      // );
      // const fieldGuIds = selected.filter((f) =>
      //   filterCategoryGuIds.includes(f),
      // );
      // onChange({ fieldName, fieldGuIds });
      onChange();
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
