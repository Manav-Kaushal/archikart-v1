import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Hotjar from "@hotjar/browser";

const siteId = 3618641;
const hotjarVersion = 6;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {Hotjar.init(siteId, hotjarVersion)}
      </body>
    </Html>
  );
}
