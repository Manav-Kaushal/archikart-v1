import { classNames } from "@utils/helpers";
import React from "react";

type SectionTitleProps = {
  title: string;
  description?: string;
  sx?: string;
  center?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description = "",
  sx = "",
  center = false,
}) => {
  return (
    <div className={classNames(sx, center && "text-center")}>
      <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-4xl text-brand-charcoal">
        {title}
      </h2>
      {description && (
        <p
          className={classNames(
            "mt-1 text-base font-light text-brand-grey",
            center && "max-w-4xl mx-auto "
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
