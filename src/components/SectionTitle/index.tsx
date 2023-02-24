import { classNames } from "@utils/helpers";
import React from "react";

type SectionTitleProps = {
  sx?: string;
  title: string;
  description?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  sx,
  title,
  description,
}) => {
  return (
    <div className={classNames("text-center", sx)}>
      <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-1 text-base font-light text-gray-500">{description}</p>}
    </div>
  );
};

export default SectionTitle;
