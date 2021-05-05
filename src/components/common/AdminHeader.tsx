import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AdminMobileDrop } from "../AdminMobileDrop";
import { Maybe } from "../../components/common/Maybe";

export const AdminHeader = () => {
  const [menuDrop, setMenuDrop] = useState(false);

  return (
    <div className="bg-green-500 ">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4 ">
          <button
            className="focus:outline-none lg:hidden"
            onClick={() => setMenuDrop(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-white fill-current "
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className="items-end hidden lg:flex">
            <Link href="/">
              <div className="flex-shrink-0 w-20 h-20 mx-auto cursor-pointer ">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={2000}
                  height={2000}
                />
              </div>
            </Link>
            <p className="pb-2 font-bold text-white">Business</p>
          </div>
          <button
            // onClick={() => setAccountDrop(true)}
            className="focus:outline-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-gray-100 fill-current "
            >
              <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
            </svg>
          </button>
          <RenderDesktop />
        </div>
        <AdminMobileDrop menuDrop={menuDrop} />
      </div>

      <Maybe condition={menuDrop}>
        <div
          onClick={() => setMenuDrop(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-40 "
        />
      </Maybe>
    </div>
  );
};

function RenderDesktop() {
  return (
    <div className="relative items-center justify-end hidden w-full col-span-2 lg:flex ">
      <div className="flex items-center space-x-5">
        <button className="flex items-center space-x-1 focus:outline-none">
          <p className="font-semibold text-white ">Dashboard</p>
        </button>
        <Link href="/product">
          <button className="flex items-center space-x-1 focus:outline-none">
            <p className="font-semibold text-white ">Products</p>
          </button>
        </Link>
        <button className="flex items-center space-x-1 focus:outline-none">
          <p className="font-semibold text-white ">Orders</p>
        </button>
        <button className="flex items-center space-x-1 focus:outline-none">
          <p className="font-semibold text-white ">Promotions</p>
        </button>

        <button
          // onClick={() => setAccountDrop(true)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-gray-100 fill-current "
          >
            <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
