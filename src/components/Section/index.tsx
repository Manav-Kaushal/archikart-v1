import { classNames } from "@utils/helpers";
import React from "react";

type Props = {
  children: React.ReactNode;
  sx?: string;
};

const Section = ({ children, sx = "" }: Props) => {
  return (
    <div className={classNames("py-24 global__container", sx)}>{children}</div>
  );
};

export default Section;
