import React, { useState, useEffect } from 'react';
import DropdownFilter from './DropdownFilter';
import { pushValuesToRouteQuery, cleanQueryData, assignValuesFromRouteQuery } from 'utils';
import { useRouter } from 'next/router';

const SearchFilters = ({ filters, onChange, queryMode, ...props }) => {
  const [filterValues, setFilterValues] = useState();
  const router = useRouter();

  useEffect(() => {
    if (filters) {
      let newFilterValues = { ...filterValues };
      if (!filterValues) {
        filters.forEach((element) => {
          console.log(element);
          newFilterValues['alma'] = [];
        });
      }
      assignValuesFromRouteQuery(router, newFilterValues);
      setFilterValues(newFilterValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, router.query]);

  const _onChange = (value) => {
    pushFiltersToRoute({ ...filterValues, ...value });
  };

  const pushFiltersToRoute = (newFilterValues) => {
    const newQueryParams = {
      ...newFilterValues,
      page: null,
    };

    if (queryMode) {
      pushValuesToRouteQuery(router, newQueryParams);
    } else if (onChange) {
      cleanQueryData(newQueryParams);
      onChange(newQueryParams);
    }
  };

  if (!filters) return;
  return (
    <div className="flex items-center" {...props}>
      {filterValues &&
        filters.map((filter, index) => (
          <div key={index}>
            <DropdownFilter
              className="input dropdown w-60"
              value={filterValues['alma']}
              filter={filter}
              onChange={_onChange}
            />
          </div>
        ))}
    </div>
  );
};
export default SearchFilters;
