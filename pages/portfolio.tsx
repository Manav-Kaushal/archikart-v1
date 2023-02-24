import Banner from "@components/Banner";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <NextSeo title="Our Portfolio" />
      <Banner title="Our Portfolio" />
    </>
  );
};

export default Portfolio;
