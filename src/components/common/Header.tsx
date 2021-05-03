import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { MobileDrop } from "../MobileDrop";
import { Maybe } from "../../components/common/Maybe";
import checkLogin from "../../utils/checkLogin";
import storage from "../../utils/storage";

export const Header = () => {
  const { data: accessToken } = useSWR("accessToken", storage);
  const isLoggedIn = checkLogin(accessToken);

  const [dropdown, setDropdown] = useState(false);

  useEffect((): any => {
    if (dropdown) {
      document.body.style.position = "fixed";
    } else document.body.style.position = "inherit";
    return () => (document.body.style.position = "inherit");
  }, [dropdown]);

  return (
    <div className="bg-white border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex justify-between ">
          <button
            className=" focus:outline-none lg:hidden"
            onClick={() => setDropdown(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-600 fill-current "
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className="flex items-end ">
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
            <p className="pb-2 font-bold text-green-600">Business</p>
          </div>
          <div className="items-center justify-end hidden w-full col-span-2 lg:flex ">
            <div className="flex items-center space-x-5">
              <div className="items-center hidden space-x-5 lg:flex ">
                <button className="flex items-center space-x-1">
                  <p className="font-semibold text-gray-800 ">Solutions</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 text-gray-800 fill-current "
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
                <button className="flex items-center space-x-1">
                  <p className="font-semibold text-gray-800 ">Products</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 text-gray-800 fill-current "
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
                <button className="flex items-center space-x-1">
                  <p className="font-semibold text-gray-800 ">Contact us</p>
                </button>
                <button className="flex items-center space-x-1">
                  <p className="font-semibold text-gray-800 ">Support</p>
                </button>
              </div>

              <Maybe condition={!isLoggedIn}>
                <button className="px-4 py-1 font-bold bg-green-500 rounded-xl focus:ring-1 focus:outline-none ring-green-600">
                  <p className="font-semibold text-white ">Log in</p>
                </button>
              </Maybe>
            </div>
          </div>
        </div>
      </div>
      <MobileDrop dropdown={dropdown} setDropdown={setDropdown} />

      <Maybe condition={dropdown}>
        <div
          onClick={() => setDropdown(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-40"
        />
      </Maybe>
    </div>
  );
};
