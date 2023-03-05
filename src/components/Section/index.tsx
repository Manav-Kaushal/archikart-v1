import { classNames } from "@utils/helpers";
import React from "react";

type Props = {
  children: React.ReactNode;
  sx?: string;
  noPadding?: boolean;
};

const Section = ({ children, sx = "", noPadding = false }: Props) => {
  return (
    <div
      className={classNames(
        "global__container",
        sx,
        noPadding ? "py-0" : "py-24"
      )}
    >
      {children}
    </div>
  );
};

export default Section;
