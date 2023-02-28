import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <NextSeo title="Services" />
      <Banner title="Services">
        <Breadcrumbs />
      </Banner>
    </>
  );
};

export default Services;
