import Logo from "@components/Logo";
import { classNames } from "@utils/helpers";
import { navigation } from "@utils/mocks/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed bg-transparent top-0 left-0 w-full h-[100px] z-40 text-white">
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
                    {navItem.title}
                  </Link>
                ))}
              </div>
            </nav>
            <button onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon
                className="block md:hidden w-8 h-8 focus:outline-none"
                aria-hidden={true}
              />
            </button>
          </div>
          {/* Mobile */}

          {/* <div className="fixed inset-0 z-50" /> */}
          <div
            className={classNames(
              "md:hidden fixed inset-y-0 z-50 w-full overflow-y-auto bg-brand-main px-6 py-6 max-w-xs transition-all duration-200 ease-in-out",
              mobileMenuOpen ? "right-0" : "-right-[400px]"
            )}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="rounded-md text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-8 h-8 text-white outline-none" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-6 py-6">
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
