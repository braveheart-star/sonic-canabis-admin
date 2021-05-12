import React from "react";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = ({ children }: any) => {
  return (
    <div>
      <AdminHeader />
      <div className="flex min-h-screen py-4 bg-gray-100 ">{children}</div>
    </div>
  );
};
