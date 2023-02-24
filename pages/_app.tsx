import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@utils/defaultSeo";
import { DefaultSeo } from "next-seo";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
