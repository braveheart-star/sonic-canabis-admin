import React, { useState } from "react";
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

  const [accountDrop, setAccountDrop] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg-white ">
      <div className="container p-2 px-4 mx-auto max-w-7xl">
        <div className="flex justify-between ">
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
          <div className="flex items-center justify-end w-full col-span-2 ">
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

              <Maybe condition={isLoggedIn}>
                <div className="relative flex items-center">
                  <button
                    onClick={() => setAccountDrop(true)}
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
              </Maybe>
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

      <Maybe condition={accountDrop}>
        <div
          onClick={() => setAccountDrop(false)}
          className="fixed inset-0 z-10 bg-black lg:bg-opacity-0 bg-opacity-5"
        />
      </Maybe>
    </div>
  );
};
