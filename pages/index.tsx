import Banner from "@components/Banner";
import Button from "@components/Button";
import Header from "@components/Header";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Welcome" />
      <Header />
      <Banner
        title="World's Biggest University"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, iste. Nulla sunt vitae culpa, dolor placeat vero ab inventore. Quae?"
        fullScreen
      >
        <div>
          <Button onClick={() => {}} size="large" shape="sharp">
            <span>Know More</span>
          </Button>
        </div>
      </Banner>
    </>
  );
};

export default Home;
