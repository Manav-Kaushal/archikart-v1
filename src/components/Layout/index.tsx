import Button from "@components/Button";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { classNames } from "@utils/helpers";
import useScroll from "@utils/hooks/useScroll";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { isShrunk } = useScroll();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!router.pathname.includes("/studio") && <Header />}
      {children}
      {!router.pathname.includes("/studio") && <Footer />}
      <button
        className={classNames(
          "fixed bottom-6 right-6 transition__300 text-brand-main border border-brand-main hover:text-white hover:border-brand-main hover:bg-brand-main p-1",
          isShrunk ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleClick}
      >
        <ArrowSmallUpIcon className="w-7 h-7" />
      </button>
    </>
  );
};

export default Layout;
