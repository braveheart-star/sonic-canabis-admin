import Link from "next/link";
import React from "react";
import { AdminLayout } from "../../components/common/AdminLayout";

export default function addProduct() {
  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 max-w-7xl">
        <Link href="/product">
          <button className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-3 h-3 text-gray-600 fill-current "
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
            <span>Products</span>
          </button>
        </Link>

        <p className="text-2xl font-bold lg:text-4xl ">Add new product</p>
      </div>
    </AdminLayout>
  );
}
