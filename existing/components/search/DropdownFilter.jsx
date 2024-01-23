import React from 'react';
import PopoverMenu from '../general/PopoverMenu';

const DropdownFilter = ({ filter, value, onChange, ...props }) => {
  const options = filter.filters?.map((option) => ({ label: option.name, value: option.filterGuid }));

  const getOptionLabel = (value) => {
    return options.find((item) => item.value === value)?.label;
  };

  const _onChange = (e, _value) => {
    let newValue = value ? [...value] : [];

    if (e.target.checked && value.indexOf(_value) < 0) {
      newValue.push(_value);
    } else if (value.indexOf(_value) >= 0) {
      newValue.splice(value.indexOf(_value), 1);
    }

    onChange({ alma: newValue });
  };
  let title = value.length > 0 ? value.map((item) => getOptionLabel(item)).join(', ') : filter.filterLabel;

  return (
    <PopoverMenu title={title} {...props}>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {options &&
          options.map((option) => (
            <li key={option.value} className="hover:bg-grey6">
              <label className="checkbox px-4 py-2 text-black flex justify-between">
                <div className="block mr-2 cursor-pointer">{option.label}</div>
                <input
                  type="checkbox"
                  value={option.id}
                  defaultChecked={value.includes(option.value)}
                  onChange={(e) => _onChange(e, option.value)}
                />
              </label>
            </li>
          ))}
      </ul>
    </PopoverMenu>
  );
};
export default DropdownFilter;
