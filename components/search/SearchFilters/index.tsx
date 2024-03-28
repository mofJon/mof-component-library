import { FC, useState, useEffect } from "react";
import { DropdownFilter, Stack } from "../../../components";
import { filterWrapper } from "./SearchFilters.styles";
import { arrayFromStringList } from "../../../utils";
import { useSearchParams } from "next/navigation";

const SearchFilters: FC<any> = ({ filters, onChange, textStyles, icons }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const filters: string[] = params.getAll("filterid") || [];
    // const arrayString = arrayFromStringList(filters)
    setSelectedFilters(filters);
  }, []);

  /* selectedFilters is an array of all available filter ids across filter dropdowns
   * handleOnChange determines which of these active IDs belong to which category and sends it back
   */

  const handleOnChange = (fieldName: string, selected: string[]) => {
    if (selected !== selectedFilters) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("filterid");
      params.delete("page");
      selected.forEach((id: string) => params.append("filterid", id));
      window.history.pushState(null, "", `?${params.toString()}`);
      setSelectedFilters(selected);
      onChange && onChange();
    }
  };

  if (!filters) return;
  return (
    <Stack {...filterWrapper}>
      {filters.map((filter: any, index: number) => (
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
