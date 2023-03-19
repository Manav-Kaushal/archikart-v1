import { classNames } from "@utils/helpers";
import React, { ReactNode } from "react";

type BaseCardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  sx?: string;
  noHoverEffect?: boolean;
};

const BaseCard = ({
  sx = "",
  noHoverEffect = false,
  ...props
}: BaseCardProps) => {
  const {
    title = "",
    description = "",
    children = null,
  } = props as BaseCardProps;

  return (
    <>
      <div
        className={classNames(
          "p-4 bg-brand-main/5 shadow rounded-xl transition duration-200 ease-in-out",
          sx,
          noHoverEffect ? "" : "hover:shadow-xl"
        )}
      >
        {title && (
          <h3 className="my-4 text-xl font-semibold text-center sm:text-lg">
            {title}
          </h3>
        )}
        {description && (
          <p className="font-light text-brand-grey">{description}</p>
        )}
        {children && <div>{children}</div>}
      </div>
    </>
  );
};

export default BaseCard;
