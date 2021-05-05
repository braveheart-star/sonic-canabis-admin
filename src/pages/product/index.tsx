import React from "react";
import Demo from "../../components/ProductTable";

import { AdminLayout } from "../../components/common/AdminLayout";

export default function dashboard() {
  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 max-w-7xl">
        <div className="flex items-center justify-between ">
          <p className="text-2xl font-bold lg:text-4xl ">Products</p>

          <button className="flex items-center px-4 py-2 space-x-1 text-sm font-bold text-white bg-green-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-3 h-3 text-white fill-current "
            >
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
            <span>Add Product</span>
          </button>
        </div>
        <div className="w-full p-4 mt-8 bg-white border lg:p-8">
          <Demo />
        </div>
      </div>
    </AdminLayout>
  );
}
