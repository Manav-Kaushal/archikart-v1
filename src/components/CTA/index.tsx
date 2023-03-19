import Typography from "@components/Typography";
import { classNames } from "@utils/helpers";
import React from "react";

type Props = {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  fullScreen?: boolean;
  description?: string | React.ReactNode;
  center?: boolean;
  backgroundImage?: string;
  zeroPadding?: boolean;
  children?: React.ReactNode;
};

const CTABanner = ({
  title = "",
  description = "",
  center = true,
  backgroundImage = "https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  children,
}: Props) => {
  return (
    <div
      className={classNames(
        "min-h-[300px] md:min-h-[325px] relative bg-no-repeat bg-cover bg-center flex items-center justify-center bg__overlay__70"
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className={classNames(
          "z-[2] text-white space-y-4",
          center ? "text-center" : ""
        )}
      >
        <Typography variant="h2" capitalize>
          {title}
        </Typography>
        {description && (
          <Typography variant="subtitle">{description}</Typography>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CTABanner;
