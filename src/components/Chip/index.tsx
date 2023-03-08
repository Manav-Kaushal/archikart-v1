import { classNames } from "@utils/helpers";
import React from "react";

type ChipSize = "small" | "medium" | "large";
type ChipType = "default" | "primary" | "secondary";

interface ChipProps {
  label: string;
  size?: ChipSize;
  type?: ChipType;
  sx?: string;
  onClick?: () => void;
}

const Sizes = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-1.5",
  large: "text-base px-4 py-2",
};

const Types = {
  default: "bg-gray-200 text-gray-800",
  primary: "bg-brand-main text-white",
  secondary: "bg-gray-800 text-white",
};

const Chip: React.FC<ChipProps> = ({
  label,
  size = "medium",
  type = "default",
  sx = "",
  onClick = () => {},
}) => {
  return (
    <div
      className={classNames(
        "w-fit rounded-full font-semibold",
        sx,
        Sizes[size],
        Types[type]
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Chip;
