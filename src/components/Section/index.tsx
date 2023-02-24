import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <div className="py-24 global__container">{children}</div>;
};

export default Section;
