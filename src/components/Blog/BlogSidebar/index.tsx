import React from "react";

type Props = {};

const BlogSidebar = (props: Props) => {
  return (
    <div className="hidden md:col-span-1 md:block md:sticky md:h-fit md:top-28">
      <p className="w-full px-4 py-3 font-semibold text-center text-white bg-brand-main">
        POST CATEGORIES
      </p>
      <div className="py-4 space-y-4">
        {[
          { title: "Business Analytics", numberOfPosts: 21 },
          { title: "Data Science", numberOfPosts: 28 },
          { title: "Machine Learning", numberOfPosts: 15 },
        ].map((category) => (
          <div
            key={category.title}
            className="flex items-center justify-between px-2 text-base font-medium cursor-pointer text-gray-8 00 hover:text-brand-main transition__300"
          >
            <span>{category.title}</span>
            <span>{category.numberOfPosts}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
