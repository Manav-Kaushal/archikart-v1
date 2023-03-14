import { ForwardRefExoticComponent, ReactNode, SVGProps } from "react";

export type StatType = {
  label: string;
  value: string;
};

export type ValueType = {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
};

export type FaqType = {
  question: string;
  answer: string;
};
