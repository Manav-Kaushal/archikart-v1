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
    <div>
      {posts.map((post) => (
        <BlogCard data={post} />
      ))}
    </div>
  );
};

export default BlogList;
