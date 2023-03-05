import { classNames } from "@utils/helpers";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "regular" | "outline" | "ghost" | "link" | "outline-white";
type ButtonSize = "regular" | "large" | "small";
type ButtonShapes = "regular" | "sharp" | "rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  sx?: string;
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShapes;
  center?: boolean;
}

const Sizes = {
  large: "px-5 py-3 text-lg",
  regular: "px-4 py-2 text-base",
  small: "px-3 py-2 text-sm",
};

const Variants = {
  regular: "bg-brand-main text-white disabled:hover:bg-brand-main",
  outline:
    "border border-brand-main text-brand-main hover:bg-brand-main hover:text-white disabled:border-brand-main disabled:bg-transparent",
  ghost: "text-brand-main disabled:hover:bg-transparent",
  link: "text-brand-main hover:underline disabled:no-underline",
  "outline-white":
    "text-white border border-white hover:bg-brand-main hover:border-brand-main",
};

const Shapes = {
  regular: "rounded-lg",
  sharp: "rounded-none",
  rounded: "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  sx = "",
  disabled = false,
  size = "regular",
  variant = "regular",
  shape = "regular",
  center = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "relative h-fit w-fit transition-all duration-300 ease-in-out",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sx,
        center && "left-1/2 -translate-x-1/2",
        Sizes[size],
        Variants[variant],
        Shapes[shape]
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
