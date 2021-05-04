import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pb-6 bg-white border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="hidden lg:block">{renderDesktop()}</div>
        <div className="lg:hidden">{renderMobile()}</div>
      </div>
    </div>
  );
};

const renderDesktop = () => (
  <div className="grid items-end grid-cols-3 ">
    <div className="flex items-end ">
      <Link href="/">
        <div className="flex-shrink-0 w-20 h-20 cursor-pointer ">
          <Image src="/images/logo.svg" alt="logo" width={2000} height={2000} />
        </div>
      </Link>
      <p className="pb-2 font-bold text-green-600">Business</p>
    </div>
    <p className="w-full text-sm text-center text-gray-500">
      Copyright © 2021 CannabisMap.
    </p>
    <div>
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
);

const renderMobile = () => (
  <div className="divide-y ">
    <div className="py-2">
      <p className="text-sm font-semibold text-center ">
        Sign up for our newsletter
      </p>
      <div className="flex mt-4">
        <button className="px-4 py-2 mx-auto text-sm font-semibold text-white bg-red-500 rounded-full">
          Subscribe
        </button>
      </div>
    </div>
    <div className="py-2 space-y-2 text-sm text-center text-gray-600">
      <p>Privacy Policy</p>
      <p>Terms of Use</p>
      <p>CanabisMap.com</p>
    </div>
    <p className="py-2 font-bold text-center">Copyright © 2021 CannabisMap.</p>
  </div>
);
