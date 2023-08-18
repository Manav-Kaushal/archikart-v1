import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Breadcrumb {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs: Breadcrumb[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLastSegment = index === pathSegments.length - 1;
      return {
        label: segment,
        href,
        isCurrentPage: isLastSegment,
      };
    }),
  ];

  return (
    <nav className="text-sm text-gray-400">
      <ol className="inline-flex p-0 list-none">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {breadcrumb.isCurrentPage ? (
              <span className="capitalize">{breadcrumb.label}</span>
            ) : (
              <>
                <Link
                  href={breadcrumb.href}
                  className="capitalize hover:text-brand-main transition__300"
                >
                  {breadcrumb.label}
                </Link>
                <span className="mx-2">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
