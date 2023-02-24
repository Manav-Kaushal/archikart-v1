import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <div className="py-24">{children}</div>;
};

export default Section;
