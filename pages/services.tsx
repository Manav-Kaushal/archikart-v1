import Banner from "@components/Banner";
import Breadcrumbs from "@components/Breadcrumbs";
import Card from "@components/Cards";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { section2Data, section4Data } from "@utils/mocks/homePageData";
import { section2DataType, section4DataType } from "@utils/types/homePage";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <NextSeo title="Services" />
      <Banner
        title="Services"
        backgroundImage="https://images.pexels.com/photos/1915906/pexels-photo-1915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Breadcrumbs />
      </Banner>
      <div className="section__card">
        <Section>
          <SectionTitle
            title="Courses We Offer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
            center
          />
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {section2Data.map((data: section2DataType) => (
              <Card
                key={data.title}
                variant="baseCard"
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </Section>
        <Section>
          <SectionTitle
            title="Our Facilities"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas inventore sunt, nihil accusantium cupiditate maiores."
            center
          />
          <div className="grid gap-12 mt-12 md:grid-cols-3">
            {section4Data.map((data: section4DataType) => (
              <Card
                key={data.title}
                variant="imageWithText"
                title={data.title}
                description={data.description}
                img={data.img}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Services;
