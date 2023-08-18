import { classNames } from "@utils/helpers";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "regular" | "outline" | "ghost" | "link" | "outline-white";
type ButtonSize = "regular" | "large" | "small";
type ButtonShapes = "regular" | "sharp" | "rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sx?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShapes;
}

const Sizes = {
  large: "px-5 py-3 text-lg",
  regular: "px-4 py-2 text-base",
  small: "px-3 py-2 text-sm",
};

const Variants = {
  regular: "bg-brand-dark text-white hover:bg-brand-main",
  outline:
    "border border-brand-main text-brand-main hover:bg-brand-main hover:text-white",
  ghost: "text-brand-main",
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
  children,
  sx = "",
  size = "regular",
  variant = "regular",
  shape = "sharp",
  ...props
}) => {
  const getBaseClasses = `relative h-fit transition-all duration-300 ease-in-out flex items-center space-x-2 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-800 disabled:border-gray-600`;

  return (
    <button
      className={classNames(
        getBaseClasses,
        Sizes[size],
        Variants[variant],
        Shapes[shape],
        sx
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
