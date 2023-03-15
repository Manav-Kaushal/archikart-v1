import { classNames } from "@utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@public/archikart_logo.svg";

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
          src={variant === "white" ? logo : logo}
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
