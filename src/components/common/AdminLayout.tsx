import React from "react";
import { motion } from "framer-motion";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = ({ children }: any) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AdminHeader />
      <div className="flex min-h-screen py-4 bg-gray-100 ">{children}</div>
    </motion.main>
  );
};
