import { ChangeEvent } from "react";

type SelectOption = {
  value: string | number;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, onChange, ...props }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
