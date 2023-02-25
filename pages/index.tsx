import Banner from "@components/Banner";
import Button from "@components/Button";
import Card from "@components/Cards";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { section2Data, section3Data } from "@utils/mocks/homePageData";
import { section2DataType, section3DataType } from "@utils/types/homePage";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Welcome" />
      <Banner
        title={
          <>
            Welcome to <span className="brand__red">Archikart.</span>
          </>
        }
        description="Designing spaces that reflect your personality."
        fullScreen
      >
        <div className="global__container mt-10">
          <Button onClick={() => {}} size="large" shape="sharp">
            <span>Know More</span>
          </Button>
        </div>
      </Banner>
      {/* Section 2 */}
      <Section>
        <SectionTitle
          title="Courses We Offer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
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
      {/* Section 3 */}
      <Section>
        <SectionTitle
          title="Our Global Campuses"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {section3Data.map((data: section3DataType) => (
            <Card
              key={data.title}
              variant="fullImage"
              title={data.title}
              img={data.img}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
