import { Category } from "@utils/types/blog";
import React from "react";

type Props = {
  categories: Category[];
};

const BlogSidebar = ({ categories }: Props) => {
  return (
    <div className="hidden md:col-span-1 md:block md:sticky md:h-fit md:top-28">
      <p className="w-full px-4 py-3 font-semibold text-center text-white bg-brand-main">
        CATEGORIES
      </p>
      <div className="py-2 divide-y">
        {categories?.map((category) => (
          <div
            key={category.title}
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer group hover:bg-gray-100"
          >
            <span className="group-hover:text-brand-main transition__300">
              {category.title}
            </span>
            <span className="group-hover:text-brand-main transition__300">
              ({category.totalPosts})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
