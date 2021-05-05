import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Canabis</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.main>
    </div>
  );
}
