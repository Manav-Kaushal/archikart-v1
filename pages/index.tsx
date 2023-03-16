import Banner from "@components/Banner";
import Button from "@components/Button";
import Card from "@components/Cards";
import InputField from "@components/InputField";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  section2Data,
  section3Data,
  section4Data,
} from "@utils/mocks/homePageData";
import {
  section2DataType,
  section3DataType,
  section4DataType,
} from "@utils/types/homePage";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Typography from "@components/Typography";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
        subTitle="Plan your home today"
        description="Designing spaces that reflect your personality."
        fullScreen
      >
        <div className="mt-10 global__container">
          <Button onClick={() => {}} size="large" shape="sharp">
            <Typography variant="body">Know More</Typography>
          </Button>
        </div>
      </Banner>
      {/* Section 2 */}
      <Section>
        <SectionTitle
          title="Courses We Offer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
          center
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 mt-12 md:grid-cols-3"
        >
          {section2Data.map((data: section2DataType) => (
            <motion.div key={data.title} variants={item}>
              <Card
                variant="baseCard"
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>
      {/* Section 3 */}
      <Section>
        <SectionTitle
          title="Our Global Campuses"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
          center
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 mt-12 md:grid-cols-3"
        >
          {section3Data.map((data: section3DataType) => (
            <motion.div key={data.title} variants={item}>
              <Card variant="fullImage" title={data.title} img={data.img} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
      {/* Section 4 */}
      <Section bottomPadding>
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
      {/* Marketing Banner */}
      <Banner
        title={
          <>
            Enroll For Our Various
            <span className="brand__red"> Online Courses</span>,
            <br />
            Anywhere From The World!
          </>
        }
        backgroundImage="https://res.cloudinary.com/manavkaushal/image/upload/v1677312907/Projects/archikart.in/banner2_ohcdeu.jpg"
        zeroPadding
      >
        <div className="mt-10 global__container">
          <Button
            onClick={() => {}}
            variant="outline-white"
            size="large"
            shape="sharp"
          >
            <span>Contact Us</span>
          </Button>
        </div>
      </Banner>
      {/* Section 6 */}
      <Section>
        <SectionTitle
          title="Subscribe To Our Daily Newsletter"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo delectus deleniti saepe sapiente et quisquam.
Numquam adipisci harum hic ut, odit inventore similique incidunt?"
          center
        />
        <div className="flex flex-col items-center justify-between max-w-lg mx-auto mt-12 sm:flex-row gap-y-4 sm:gap-x-6 sm:gap-y-0">
          <InputField
            type="text"
            placeholder="Enter email"
            shape="sharp"
            LeftIcon={EnvelopeIcon}
          />
          <Button onClick={() => {}} variant="outline" shape="sharp">
            <span>Subscribe</span>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
