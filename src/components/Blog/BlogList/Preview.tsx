import React from "react";
import { usePreview } from "@utils/sanity/sanity.preview";
import BlogList from "./index";
import Button from "@components/Button";
import { NextRouter } from "next/router";

type Props = {
  router: NextRouter;
  query: string;
};

const BlogListPreview = ({ router, query }: Props) => {
  const posts = usePreview(
    "skF7lKeEP1BKP3KGv6r6Fbiu8w6HTzsfI5Dta7yGbIOGRNyg0tFmG9doeYa0ulKWqMVeOXhg33yFzBHm1yrexIKcxVdLJy9DSByzbRMpWJW0XctOtmUQY3Y8q4x66f05sZUKmainAN9gKAye842Pm5Tm5mKFGrPfJXpu8dOJXSmurgmjDQbv",
    query
  );
  return <BlogList posts={posts} />;
};

export default BlogListPreview;
