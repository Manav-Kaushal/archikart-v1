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
      <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-4xl text-brand-charcoal">
        {title}
      </h2>
      {description && (
        <p className="max-w-4xl mx-auto mt-1 text-base font-light text-brand-grey">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
