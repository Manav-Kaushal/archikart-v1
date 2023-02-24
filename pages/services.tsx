import Banner from "@components/Banner";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <NextSeo title="Services" />
      <Banner title="Services" />
    </>
  );
};

export default Services;
