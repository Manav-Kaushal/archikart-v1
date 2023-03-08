import { classNames, getCloudinaryImageUrl } from "@utils/helpers";
import Image from "next/image";
import React, { ReactNode } from "react";

type BaseCardProps = {
  variant: "baseCard";
  title?: string;
  description?: string;
  children?: ReactNode;
  sx?: string;
};
type FullImageProps = {
  variant: "fullImage";
  title: string;
  img: string;
  sx?: string;
};
type ImageWithTextProps = {
  variant: "imageWithText";
  title?: string;
  description?: string;
  img?: string;
  sx?: string;
};
type FormProps = {
  variant: "form";
  children: ReactNode;
  title?: string;
  description?: string;
  sx?: string;
};

type CardProps =
  | BaseCardProps
  | FullImageProps
  | ImageWithTextProps
  | FormProps;

const Card = ({ variant = "baseCard", sx = "", ...props }: CardProps) => {
  if (variant === "baseCard") {
    const {
      title = "",
      description = "",
      children = null,
    } = props as BaseCardProps;
    return (
      <>
        <div
          className={classNames(
            "p-4 bg-brand-main/5 shadow rounded-xl hover:shadow-xl transition duration-200 ease-in-out",
            sx
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
  }

  if (variant === "fullImage") {
    const { title, img } = props as FullImageProps;
    return (
      <div className="relative overflow-hidden shadow transition__300 group rounded-xl hover:shadow-xl">
        <div
          className={classNames(
            "relative rounded-xl hover:shadow-xl transition__300 min-h-[475px] cursor-pointer after:content-[''] after:bg-brand-dark after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-70",
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
        <h4 className="uppercase text-white text-2xl absolute top-[110%] group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition__300">
          {title}
        </h4>
      </div>
    );
  }

  if (variant === "imageWithText") {
    const {
      title = "",
      description = "",
      img = "",
    } = props as ImageWithTextProps;
    return (
      <div className="shadow group rounded-xl hover:shadow-xl transition__300">
        <div
          className={classNames("relative  rounded-t-xl aspect-[1.2/1] ", sx)}
        >
          <Image
            src={getCloudinaryImageUrl(img as string)}
            alt={title}
            className="object-cover object-center rounded-t-xl"
            fill
          />
        </div>
        <div className={classNames("p-4 bg-brand-main/5 rounded-b-xl", sx)}>
          <h3 className="mt-2 mb-4 text-xl font-semibold cursor-pointer sm:text-lg group-hover:text-brand-main transition__300">
            {title}
          </h3>
          <p className="font-light text-brand-grey">{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "form") {
    const { title = "", description = "", children } = props as FormProps;
    return (
      <div
        className={classNames(
          "p-4 bg-brand-main/5 shadow rounded-xl transition duration-200 ease-in-out",
          sx
        )}
      >
        {title && (
          <h3 className="text-3xl font-semibold capitalize text-brand-main">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-xl font-light text-brand-grey">{description}</p>
        )}
        <div>{children}</div>
      </div>
    );
  }

  return null;
};

export default Card;
