import { classNames } from "@utils/helpers";
import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "body";
  sx?: string;
  capitalize?: boolean;
}

const VariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "h5",
  body: "p",
  span: "span",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  sx,
  ...props
}) => {
  const { capitalize } = props;

  const getHeadingClass = () => {
    switch (variant) {
      case "h1":
        return "text-5xl font-bold leading-tight";
      case "h2":
        return "text-3xl font-semibold leading-tight";
      case "h3":
        return "text-2xl font-medium leading-tight";
      case "h4":
        return "text-xl font-medium leading-tight";
      case "h5":
        return "text-lg font-medium leading-tight";
      case "h6":
        return "text-base font-medium leading-tight";
      case "subtitle":
        return "text-lg font-medium leading-tight text-gray-600";
      case "body":
        return "text-base font-normal leading-6";
      default:
        return "";
    }
  };

  const Component: any = variant ? VariantMapping[variant] : "p";

  return (
    <Component
      className={classNames(getHeadingClass(), sx, capitalize && "capitalize")}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
