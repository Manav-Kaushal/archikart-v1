import { classNames } from "@utils/helpers";
import { ChangeEvent, HTMLAttributes } from "react";
import React from "react";

type SelectOption = {
  [key: string]: any;
};

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  labelKey: string;
  valueKey: string;
  name: string;
  sx?: string;
}

const Select = ({
  options,
  value,
  onChange,
  labelKey,
  valueKey,
  name,
  sx,
  ...props
}: SelectProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={classNames(
        "block px-2 py-2 pr-8 leading-tight text-black bg-white border-2 border-gray-400 rounded-md shadow hover:border-gray-500 focus:outline-none transition__300",
        sx
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option[valueKey]} value={option[valueKey].toLowerCase()}>
          {option[labelKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
