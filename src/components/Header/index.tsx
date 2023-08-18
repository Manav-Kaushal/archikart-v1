import Logo from "@components/Logo";
import { classNames } from "@utils/helpers";
import { navigation } from "@utils/mocks/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  ArrowRightIcon,
  Bars3Icon,
  LinkIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import useScroll from "@utils/hooks/useScroll";
import Typography from "@components/Typography";
import Button from "@components/Button";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isShrunk } = useScroll();

  return (
    <header
      className={classNames(
        "fixed  top-0 left-0 w-full z-40 text-white transition__300 ",
        isShrunk ? "h-[70px] bg-black/90" : "h-[90px] bg-transparent"
      )}
    >
      <div className="global__container">
        <div className="flex items-center justify-between h-full">
          <div>
            <Logo sx="w-40 h-12" />
          </div>
          {/* Desktop */}
          <div>
            <nav className="hidden md:block">
              <div className="flex items-center justify-center gap-x-6">
                {navigation.map((navItem) => (
                  <Link
                    key={navItem.title}
                    href={navItem.route}
                    className={classNames(
                      "cursor-pointer font-medium text-lg ",
                      navItem.route === pathname
                        ? "underline__effect__active"
                        : "underline__effect"
                    )}
                  >
                    <Typography variant="bodySmall">{navItem.title}</Typography>
                  </Link>
                ))}
                <Button size="small" onClick={() => router.push("/contact")}>
                  <Typography variant="bodySmall">Get A Quote</Typography>
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="block md:hidden focus:outline-none"
            >
              <Bars3Icon className="w-8 h-8" aria-hidden={true} />
            </button>
          </div>
          
          {/* Mobile */}
          <div
            className={classNames(
              "md:hidden fixed inset-y-0 z-50 w-full overflow-y-auto bg-brand-main px-6 py-6 max-w-xs transition-all duration-200 ease-in-out",
              mobileMenuOpen ? "right-0" : "-right-[400px]"
            )}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-8 h-8 text-white outline-none" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-6">
                  {navigation.map((navItem) => (
                    <Link
                      key={navItem.title}
                      href={navItem.route}
                      className={classNames(
                        "block w-full cursor-pointer font-medium text-2xl text-white"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
