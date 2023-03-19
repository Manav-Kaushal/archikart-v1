import Typography from "@components/Typography";
import { classNames } from "@utils/helpers";
import React from "react";

type SectionTitleProps = {
  title: string | React.ReactNode;
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
      <Typography variant="h3" center={center} capitalize>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body"
          sx="text-brand-grey"
          style={{ fontWeight: 300 }}
          center
        >
          {description}
        </Typography>
      )}
    </div>
  );
};

export default SectionTitle;
