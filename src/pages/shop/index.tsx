import React from "react";
import Link from "next/link";

import { AdminLayout } from "../../components/common/AdminLayout";
import { PaginatedProductTable } from "../../components/PaginatedProductTable";

export default function shop() {
  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 ">
        <p className="text-2xl font-bold lg:text-4xl ">Manage store profile</p>
        <div className="w-full p-4 mt-8 border sm:space-y-4 lg:space-y-8 ">
          <div className="flex items-center max-w-sm px-4 py-2 space-x-2 bg-white border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-3 h-3 text-gray-500 fill-current "
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              placeholder="Search products"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="p-6 mt-8 bg-white border ">
            <PaginatedProductTable />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
