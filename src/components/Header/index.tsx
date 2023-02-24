import Logo from "@components/Logo";
import { navigation } from "@utils/mocks/navigation";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed bg-transparent top-0 left-0 w-full h-[100px] z-50 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-0 h-full">
        <div className="flex items-center justify-between h-full">
          <div>
            <Logo sx="w-40 h-12" />
          </div>
          {/* Desktop */}
          <div>
            <nav>
              <ul className="flex items-center justify-center gap-x-6">
                {navigation.map((navItem) => (
                  <Link
                    key={navItem.title}
                    href={navItem.route}
                    className="cursor-pointer font-medium"
                  >
                    {navItem.title}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
