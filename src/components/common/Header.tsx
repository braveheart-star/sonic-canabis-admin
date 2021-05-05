import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MobileDrop } from "../MobileDrop";
import { Maybe } from "../../components/common/Maybe";

export const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const [solutionDrop, setSolutionDrop] = useState(false);
  const [productDrop, setProductDrop] = useState(false);

  // useEffect((): any => {
  //   if (menuDrop) {
  //     document.body.style.position = "fixed";
  //   } else document.body.style.position = "inherit";
  //   return () => (document.body.style.position = "inherit");
  // }, [menuDrop]);

  return (
    <div className="bg-white ">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between ">
          <button
            className="focus:outline-none lg:hidden"
            onClick={() => setMenuDrop(true)}
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
          <RenderDesktop
            setSolutionDrop={setSolutionDrop}
            setProductDrop={setProductDrop}
            solutionDrop={solutionDrop}
            productDrop={productDrop}
          />
        </div>
        <MobileDrop menuDrop={menuDrop} setDropdown={setMenuDrop} />
      </div>

      <Maybe condition={menuDrop}>
        <div
          onClick={() => setMenuDrop(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-40 "
        />
      </Maybe>

      <Maybe condition={solutionDrop}>
        <div
          onClick={() => setSolutionDrop(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-5"
        />
      </Maybe>

      <Maybe condition={productDrop}>
        <div
          onClick={() => setProductDrop(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-5"
        />
      </Maybe>
    </div>
  );
};

const renderSolutionDrop = () => (
  <div className="absolute z-20 top-8">
    <div className="px-6 py-2 text-sm text-left bg-white divide-y rounded shadow-md SolutionMenu">
      <p className="py-2 cursor-pointer">Retailers</p>
      <p className="py-2 cursor-pointer">Brands</p>
    </div>
  </div>
);

const renderProductDrop = () => (
  <div
    className="absolute z-20 border rounded-md top-8 -left-72"
    style={{ width: "600px" }}
  >
    <div className="text-sm text-left bg-white divide-y rounded-md shadow-md ProductMenu">
      <div className="grid grid-cols-3 text-gray-600 divide-x">
        <div className="p-4 space-y-4 ">
          <p>Get a presence</p>
          <div>
            <p className="text-sm font-bold ">WM Pages</p>
            <p className="text-xs ">Get listed on Weedmaps</p>
          </div>
          <div>
            <p>
              <span className="font-semibold ">--</span> For Retailers
            </p>
            <p>
              <span className="font-semibold ">--</span> For Brands
            </p>
          </div>
        </div>
        <div className="p-4 space-y-4 ">
          <p>Drive traffic</p>
          <div>
            <p className="text-sm font-bold ">WM Ads</p>
            <p className="text-xs ">Promote your business</p>
          </div>
          <div>
            <p className="text-sm font-bold ">WM Deals</p>
            <p className="text-xs ">Growth with savings</p>
          </div>
        </div>
        <div className="p-4 space-y-4 ">
          <p>Streamline operations</p>
          <div>
            <p className="text-sm font-bold ">WM Orders</p>
            <p className="text-xs">Ecommerce for delivery and pickup </p>
          </div>
          <div>
            <p>
              <span className="font-semibold ">--</span> WM Store
            </p>
          </div>
          <div>
            <p className="text-sm font-bold ">WM Retail</p>
            <p className="text-xs">Integrated POS solution </p>
          </div>

          <div>
            <p className="text-sm font-bold ">WM Exchange</p>
            <p className="text-xs">Wholesale marketplace </p>
          </div>

          <div>
            <p>
              <span className="font-semibold ">--</span>For Buyers
            </p>
            <p>
              <span className="font-semibold ">--</span>For Sellers
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface DesktopProps {
  setSolutionDrop: Function;
  solutionDrop: boolean;
  setProductDrop: Function;
  productDrop: boolean;
}
function RenderDesktop(props: DesktopProps) {
  const { setSolutionDrop, setProductDrop, solutionDrop, productDrop } = props;
  return (
    <div className="relative items-center justify-end hidden w-full col-span-2 lg:flex ">
      <div className="flex items-center space-x-5">
        <div className="relative">
          <button
            onClick={() => setSolutionDrop(true)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <p className="font-semibold text-gray-800 ">Solutions</p>
            {!solutionDrop ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4 text-gray-800 fill-current "
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4 text-gray-800 fill-current "
              >
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
              </svg>
            )}
          </button>
          {solutionDrop && renderSolutionDrop()}
        </div>
        <div className="relative ">
          <button
            onClick={() => setProductDrop(true)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <p className="font-semibold text-gray-800 ">Products</p>
            {!productDrop ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4 text-gray-800 fill-current "
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4 text-gray-800 fill-current "
              >
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
              </svg>
            )}
          </button>
          {productDrop && renderProductDrop()}
        </div>
        <button className="flex items-center space-x-1 focus:outline-none">
          <p className="font-semibold text-gray-800 ">Contact us</p>
        </button>
        <button className="flex items-center space-x-1 focus:outline-none">
          <p className="font-semibold text-gray-800 ">Support</p>
        </button>
        <button className="px-4 py-1 font-bold bg-yellow-500 rounded-xl focus:ring-1 focus:outline-none ring-yellow-600">
          <p className="font-semibold text-white ">Dashboard</p>
        </button>
        {!true ? (
          <button className="px-4 py-1 font-bold bg-green-500 rounded-xl focus:ring-1 focus:outline-none ring-green-600">
            <p className="font-semibold text-white ">Log in</p>
          </button>
        ) : (
          <button className="px-4 py-1 font-bold bg-green-500 rounded-xl focus:ring-1 focus:outline-none ring-green-600">
            <p className="font-semibold text-white ">Log out</p>
          </button>
        )}
      </div>
    </div>
  );
}
