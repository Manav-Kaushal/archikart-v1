import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <NextSeo title="Our Certificate & Online Programs For 2021" />
      <Banner title="Our Certificate & Online Programs For 2021">
        <Breadcrumbs />
      </Banner>
    </>
  );
};

export default Blog;
