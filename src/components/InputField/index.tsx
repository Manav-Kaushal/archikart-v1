import { classNames } from "@utils/helpers";
import {
  ChangeEventHandler,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  LeftIcon?: any;
  RightIcon?: any;
  sx?: string;
  shape?: "regular" | "sharp";
}

const getShape = {
  regular: "rounded-md",
  sharp: "rounded-none",
};

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  LeftIcon,
  RightIcon,
  sx,
  shape = "regular",
  ...props
}: InputProps) => {
  const renderLeftIcon = (): ReactNode => {
    if (!LeftIcon) return null;
    return (
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <LeftIcon className="w-5 h-5 text-gray-500" />
      </span>
    );
  };

  const renderRightIcon = (): ReactNode => {
    if (!RightIcon) return null;
    return (
      <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <RightIcon className="w-5 h-5 text-gray-500" />
      </span>
    );
  };

  return (
    <div className="relative w-full">
      {renderLeftIcon()}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          "w-full px-4 py-2 bg-gray-100 border outline-none focus:ring-1 focus:ring-sky-500 transition__300",
          sx,
          getShape[shape],
          LeftIcon && "pl-10",
          RightIcon && "pr-10"
        )}
        {...props}
      />
      {renderRightIcon()}
    </div>
  );
};

export default InputField;
