import { classNames } from "@utils/helpers";
import React from "react";

type Props = {
  title: string | React.ReactNode;
  fullScreen?: boolean;
  description?: string | React.ReactNode;
  center?: boolean;
  backgroundImage?: string;
  children?: React.ReactNode;
};

const Banner = ({
  fullScreen = false,
  title,
  description = "",
  center = true,
  backgroundImage = "https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  children,
}: Props) => {
  return (
    <div
      className={classNames(
        "relative bg-no-repeat bg-cover bg-center flex items-center justify-center bg__overlay pt-[50px]", // pt-[50px] is given to accommodate the top space that header used
        fullScreen ? "min-h-screen" : "min-h-[300px] md:min-h-[325px]"
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className={classNames(
          "z-[2] text-white space-y-4",
          center ? "text-center" : null
        )}
      >
        <h1
          className={classNames(
            "font-bold max-w-7xl",
            fullScreen
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              : "text-3xl md:text-4xl lg:text-5xl"
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-2xl max-w-xl mx-auto">{description}</p>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Banner;
