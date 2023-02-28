import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <NextSeo title="Our Portfolio" />
      <Banner title="Our Portfolio">
        <Breadcrumbs />
      </Banner>
    </>
  );
};

export default Portfolio;
