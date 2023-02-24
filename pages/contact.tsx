import Banner from "@components/Banner";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <NextSeo title="Contact Us" />
      <Banner title="Contact Us" />
    </>
  );
};

export default Contact;
