import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <NextSeo title="About Us" />
      <Banner
        title="About Us"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <Section>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 place-items-center">
          <div>
            <SectionTitle
              title="We Are The World's Largest University"
              sx="text-left"
            />
            <p className="mt-4 text-brand-grey">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quam
              vel accusamus odit deleniti sunt nemo neque omnis aliquam laborum
              illum autem ut fugit iure quasi animi, libero quia ducimus alias,
              corporis officia, earum dignissimos! Veniam dolorum tempora eum!
              Sint, praesentium quam esse ex quos unde quas quo aliquam ratione!
            </p>
            <Button
              variant="outline"
              shape="sharp"
              onClick={() => {}}
              sx="mt-8"
            >
              Explore Now
            </Button>
          </div>
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="archikart about us"
              className="shadow-xl rounded-xl"
              fill
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
