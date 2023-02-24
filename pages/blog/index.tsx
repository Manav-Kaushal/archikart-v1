import Banner from "@components/Banner";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <NextSeo title="Our Certificate & Online Programs For 2021" />
      <Banner title="Our Certificate & Online Programs For 2021" />
    </>
  );
};

export default Blog;
