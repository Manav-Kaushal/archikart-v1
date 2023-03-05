import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Button from "@components/Button";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { app } from "@utils/config";
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
              At <span className="text-brand-main">{app.name}</span>, we believe
              that great architecture has the power to transform spaces and
              inspire lives. We are passionate about designing buildings that
              not only meet the functional needs of our clients, but also create
              a sense of place and community. With our team of skilled
              architects, we bring together form, function, and beauty to create
              buildings that stand the test of time.
            </p>
            <p className="mt-4 text-brand-grey">
              Whether it's a residential, commercial, or public project, we are
              committed to excellence and delivering exceptional results that
              exceed our clients' expectations. Join us on a journey to
              transform spaces and inspire lives with great architecture.
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
