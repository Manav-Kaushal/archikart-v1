import Banner from "@components/Banner";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <NextSeo title="About Us" />
      <Banner title="About Us" />
    </>
  );
};

export default About;
