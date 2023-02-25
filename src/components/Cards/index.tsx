import { classNames, getCloudinaryImageUrl } from "@utils/helpers";
import Image from "next/image";
import React from "react";

type EventConfig<Events extends { variant: string }> = {
  [E in Events as E["variant"]]: (event: E) => void;
};

type CardProps = {
  variant: "baseCard" | "fullImage";
  title: string;
  description?: string;
  img?: string;
  sx?: string;
};

const Card = ({ variant, title, description, img, sx }: CardProps) => {
  if (variant === "baseCard") {
    return (
      <div
        className={classNames(
          "p-4 bg-brand-main/5 shadow rounded-xl hover:shadow-xl transition duration-200 ease-in-out",
          sx
        )}
      >
        <h3 className="text-center font-semibold text-xl sm:text-lg py-4">
          {title}
        </h3>
        <p className="font-extralight text-brand-grey">{description}</p>
      </div>
    );
  }
  if (variant === "fullImage") {
    return (
      <div className="group relative overflow-hidden">
        <div
          className={classNames(
            "relative p-4 bg-brand-main/5 shadow rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out min-h-[475px] cursor-pointer after:content-[''] after:bg-brand-dark after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-70",
            sx
          )}
        >
          <Image
            src={getCloudinaryImageUrl(img as string)}
            alt={title}
            className="object-cover object-center rounded-xl"
            fill
          />
        </div>
        <h4 className="uppercase text-white text-2xl absolute top-[110%] group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out">
          {title}
        </h4>
      </div>
    );
  }
  return null;
};

export default Card;
