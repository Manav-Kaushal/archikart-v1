import Banner from "@components/Banner";
import Button from "@components/Button";
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
    </>
  );
};

export default Home;
