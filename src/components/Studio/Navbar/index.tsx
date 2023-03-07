import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: any) => {
  return (
    <div className="bg-[transparent]">
      <div className="p-3 bg-[#101112] text-brand-main">
        <Link href="/" className="flex items-center space-x-2">
          <ArrowUturnLeftIcon className="w-5 h-5" />
          <span>Go Back To Website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Navbar;
