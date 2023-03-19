import Typography from "@components/Typography";
import { classNames, getCloudinaryImageUrl } from "@utils/helpers";
import Image from "next/image";
import React from "react";

type FullImageProps = {
  title: string;
  img: string;
  sx?: string;
  noHoverEffect?: boolean;
};

const FullImageCard = ({
  sx = "",
  noHoverEffect = false,
  ...props
}: FullImageProps) => {
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
      <Typography
        variant="h4"
        sx="uppercase text-white text-2xl absolute top-[110%] group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition__300 pointer-events-none"
      >
        {title}
      </Typography>
    </div>
  );
};

export default FullImageCard;
