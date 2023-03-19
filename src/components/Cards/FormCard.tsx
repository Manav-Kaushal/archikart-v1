import SectionTitle from "@components/SectionTitle";
import { classNames } from "@utils/helpers";
import React, { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  title?: string | React.ReactNode;
  description?: string;
  sx?: string;
  noHoverEffect?: boolean;
};

const FormCard = ({ sx = "", noHoverEffect = false, ...props }: FormProps) => {
  const { title = "", description = "", children } = props as FormProps;
  return (
    <div
      className={classNames(
        "px-8 py-10 bg-brand-main/5 shadow rounded-xl transition duration-200 ease-in-out",
        sx
      )}
    >
      {/* {title && (
          <h3 className="text-3xl font-semibold capitalize text-brand-text">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-xl font-light text-brand-grey">{description}</p>
        )} */}
      <SectionTitle title={title} description={description} />
      <div>{children}</div>
    </div>
  );
};

export default FormCard;
