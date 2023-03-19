import Banner from "@components/Banner";
import Button from "@components/Button";
import InputField from "@components/InputField";
import Section from "@components/Section";
import SectionTitle from "@components/SectionTitle";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
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
import underline_1 from "@public/underline_1.svg";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Typography from "@components/Typography";
import CTABanner from "@components/CTA";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import BaseCard from "@components/Cards/BaseCard";
import FullImageCard from "@components/Cards/FullImageCard";
import ImageWithText from "@components/Cards/ImageWithText";

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
            Transforming Your
            <span className="brand__red"> Vision</span>
            <br /> into <span className="brand__red">Reality</span>
          </>
        }
        subTitle={
          <>
            Designing spaces that{" "}
            <span className="underline__1 pb-[16px]">inspire</span>
          </>
        }
        // description="Designing spaces that reflect your personality"
        backgroundImage="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullScreen
      >
        <div className="flex items-center justify-center mt-10 space-x-10 global__container">
          <Button onClick={() => {}} size="large">
            <Typography variant="body">Create</Typography>
            <InformationCircleIcon className="w-5 h-5" />
          </Button>
          <Button onClick={() => {}} size="large">
            <Typography variant="body">Contact</Typography>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </Banner>
      {/* Section 2 */}
      <Section>
        <SectionTitle
          title={
            <>
              Courses We <span className="text-brand-main">Offer</span>
            </>
          }
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
          center
        />
        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {section2Data.map((data: section2DataType) => (
            <div key={data.title}>
              <BaseCard
                title={data.title}
                description={data.description}
                sx={`hover:-mt-2 transition__300 cursor-default`}
              />
            </div>
          ))}
        </div>
      </Section>
      {/* Section 3 */}
      <Section>
        <SectionTitle
          title={
            <>
              Our <span className="text-brand-main">Global </span>
              Campuses
            </>
          }
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
              <FullImageCard title={data.title} img={data.img} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
      {/* Section 4 */}
      <Section bottomPadding>
        <SectionTitle
          title={
            <>
              Our <span className="text-brand-main">Facilities</span>
            </>
          }
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas inventore sunt, nihil accusantium cupiditate maiores."
          center
        />
        <div className="grid gap-12 mt-12 md:grid-cols-3">
          {section4Data.map((data: section4DataType) => (
            <ImageWithText
              key={data.title}
              title={data.title}
              description={data.description}
              img={data.img}
            />
          ))}
        </div>
      </Section>
      {/* Marketing Banner */}
      <CTABanner
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
            center
          >
            <Typography variant="body">Contact Us</Typography>
          </Button>
        </div>
      </CTABanner>
      {/* Section 6 */}
      <Section>
        <SectionTitle
          title={
            <>
              Subscribe To Our
              <span className="brand__red"> Daily Newsletter</span>
            </>
          }
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
          <Button
            onClick={() => {}}
            variant="outline"
            size="small"
            shape="sharp"
          >
            <span>Subscribe</span>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
