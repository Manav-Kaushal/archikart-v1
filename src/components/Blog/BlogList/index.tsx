import sanityImageToUrl from "@utils/sanity/sanityImageToUrl";
import getSanityImageUrl from "@utils/sanity/sanityImageToUrl";
import { Post } from "@utils/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCard from "../BlogCard";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post._id} data={post} />
      ))}
    </div>
  );
};

export default BlogList;
