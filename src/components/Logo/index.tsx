import { classNames } from "@utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  sx?: string;
  variant?: "white" | "black";
  center?: boolean;
};

const Logo = ({
  sx = "w-40 h-12",
  variant = "white",
  center = true,
  ...props
}: LogoProps) => {
  return (
    <div className={classNames("relative", sx, center && "mx-auto")} {...props}>
      <Link href="/">
        <Image
          src={
            variant === "white"
              ? "https://res.cloudinary.com/manavkaushal/image/upload/v1677269944/Projects/logo_kxv8do.png"
              : ""
          }
          alt="Archikart Logo"
          className="object-contain"
          priority
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
