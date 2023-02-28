import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <NextSeo title="Our Portfolio" />
      <Banner
        title="Our Portfolio"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
    </>
  );
};

export default Portfolio;
