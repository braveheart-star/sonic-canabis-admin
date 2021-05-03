import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pb-6 bg-white ">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid items-end grid-cols-3 ">
          <div className="flex items-end ">
            <Link href="/">
              <div className="flex-shrink-0 w-20 h-20 cursor-pointer ">
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
          <p className="w-full text-sm text-center text-gray-500">
            Copyright © 2021 CannabisMap.
          </p>
          <div className="">
            <div className="flex items-center justify-center w-full space-x-4 ">
              <span className="text-sm font-semibold ">
                Sign up for our newsletter
              </span>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full">
                Subscribe
              </button>
            </div>
            <div className="grid grid-cols-3 mt-4 text-sm text-center text-gray-500 divide-x">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>CannabisMap.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
