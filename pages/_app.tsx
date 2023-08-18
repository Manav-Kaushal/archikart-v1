import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@utils/defaultSeo";
import { DefaultSeo } from "next-seo";
import Layout from "@components/Layout";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

const siteId = 3618641;
const hotjarVersion = 6;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <Layout>
      <ToastContainer
        autoClose={2000}
        transition={Slide}
        position={"bottom-right"}
        hideProgressBar
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
