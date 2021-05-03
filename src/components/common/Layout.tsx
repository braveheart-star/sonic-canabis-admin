import React from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="relative flex flex-col w-full min-h-screen ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Header />
          {/* <div className="flex min-h-screen py-4 lg:py-8 ">{children}</div> */}
          {/* <Footer /> */}
        </motion.main>
      </div>
    </div>
  );
};
