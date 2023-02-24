import Button from "@components/Button";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Welcome" />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Button onClick={() => {}} size="large">
          <span>Know More</span>
        </Button>
        Test
      </div>
    </>
  );
};

export default Home;
