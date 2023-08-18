import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@utils/defaultSeo";
import { DefaultSeo } from "next-seo";
import Layout from "@components/Layout";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
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
