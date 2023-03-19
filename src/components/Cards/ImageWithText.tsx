import { classNames, getCloudinaryImageUrl } from "@utils/helpers";
import Image from "next/image";
import Typography from "@components/Typography";
import React from "react";

type ImageWithTextProps = {
  title?: string;
  description?: string;
  img?: string;
  sx?: string;
  noHoverEffect?: boolean;
};

const ImageWithText = ({
  sx = "",
  noHoverEffect = false,
  ...props
}: ImageWithTextProps) => {
  const {
    title = "",
    description = "",
    img = "",
  } = props as ImageWithTextProps;

  return (
    <div className="shadow group rounded-xl hover:shadow-xl transition__300">
      <div className={classNames("relative rounded-t-xl aspect-[1.2/1] ", sx)}>
        <Image
          src={getCloudinaryImageUrl(img as string)}
          alt={title}
          className="object-cover object-center rounded-t-xl"
          fill
        />
      </div>
      <div className={classNames("p-4 bg-brand-main/5 rounded-b-xl", sx)}>
        <Typography
          variant="h5"
          sx="my-2 font-semibold cursor-pointer group-hover:text-brand-main transition__300"
        >
          {title}
        </Typography>
        <Typography variant="bodySmall" sx="font-light text-brand-grey">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ImageWithText;
