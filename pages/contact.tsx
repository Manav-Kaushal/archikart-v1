import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <NextSeo title="Contact Us" />
      <Banner title="Contact Us">
        <Breadcrumbs />
      </Banner>
    </>
  );
};

export default Contact;
