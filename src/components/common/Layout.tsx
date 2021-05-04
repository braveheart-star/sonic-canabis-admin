import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {/* <div className="flex min-h-screen py-4 lg:py-8 ">{children}</div> */}
      <Footer />
    </div>
  );
};
