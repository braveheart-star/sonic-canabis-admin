import React, { useState } from "react";
import Link from "next/link";
import useSWR, { mutate } from "swr";

import storage from "../utils/storage";
import checkLogin from "../utils/checkLogin";
import styles from "../styles/components.module.scss";

interface MobileDropInterface {
  menuDrop: boolean;
  setDropdown: Function;
}

export const MobileDrop = (props: MobileDropInterface) => {
  const { menuDrop, setDropdown } = props;

  const { data: accessToken } = useSWR("accessToken", storage);
  const isLoggedIn = checkLogin(accessToken);

  const handleLogout = async () => {
    window.localStorage.removeItem("accessToken");
    mutate("accessToken", "");
    setDropdown(false);
  };

  const [solutionDrop, setSolutionDrop] = useState(false);
  const [productDrop, setProductDrop] = useState(false);
  const [pageDrop, setPageDrop] = useState(false);
  const [orderDrop, setOrderDrop] = useState(false);
  const [exchangeDrop, setExchangeDrop] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-4/5 min-h-screen bg-teal-500 text-white lg:hidden ${
        menuDrop ? `${styles.mobileOpen}` : `${styles.mobileClose}`
      }`}
    >
      <div className="max-h-screen overflow-y-scroll ">
        <div className="p-5 space-y-8 ">
          {!isLoggedIn ? (
            <div className="flex pt-4 space-x-6 sm:space-x-8 ">
              <Link href="/auth/login">
                <button className="px-4 py-1 font-bold text-black bg-white rounded-full">
                  Log in
                </button>
              </Link>
            </div>
          ) : (
            <div className="py-4 ">
              <button
                onClick={handleLogout}
                className="px-4 py-1 font-bold text-white bg-yellow-500 rounded-lg sm:px-6 sm:py-2"
              >
                Log out
              </button>
            </div>
          )}
          <div className="space-y-8 ">
            <div className="relative space-y-2">
              <button
                onClick={() => setSolutionDrop(!solutionDrop)}
                className="flex items-center space-x-2"
              >
                <p className="font-bold ">Solutions</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`w-4 h-4 text-white duration-300 transform fill-current ${
                    solutionDrop && "rotate-180"
                  }`}
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {solutionDrop && (
                <div className="space-y-2 ">
                  <p className="p-2 bg-gradient-to-l from-emerald-300 ">
                    For Retailers
                  </p>
                  <p className="p-2 bg-gradient-to-l from-emerald-300 ">
                    For Brands
                  </p>
                </div>
              )}
            </div>
            <div className="relative space-y-2">
              <button
                onClick={() => setProductDrop(!productDrop)}
                className="flex items-center space-x-2"
              >
                <p className="font-bold ">Products</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`w-4 h-4 text-white duration-300 transform fill-current ${
                    productDrop && "rotate-180"
                  }`}
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {productDrop && (
                <div className="space-y-2 ">
                  <div>
                    <button
                      onClick={() => setPageDrop(!pageDrop)}
                      className="flex items-center focus:outline-none"
                    >
                      <p className="p-2 text-sm font-semibold">WM Pages</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className={`w-4 h-4 text-white duration-300 transform fill-current ${
                          pageDrop && "rotate-180"
                        }`}
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    {pageDrop && (
                      <div className="space-y-2 text-xs font-semibold ">
                        <p className="p-2 bg-gradient-to-l from-teal-300 ">
                          For Retailers
                        </p>
                        <p className="p-2 bg-gradient-to-l from-teal-300 ">
                          For Brands
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="p-2 text-sm font-semibold">WM Ads</p>
                  <p className="p-2 text-sm font-semibold">WM Deals</p>
                  <div>
                    <button
                      onClick={() => setOrderDrop(!orderDrop)}
                      className="flex items-center focus:outline-none "
                    >
                      <p className="p-2 text-sm font-semibold">WM Orders</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className={`w-4 h-4 text-white duration-300 transform fill-current ${
                          orderDrop && "rotate-180"
                        }`}
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    {orderDrop && (
                      <div className="space-y-2 text-xs font-semibold ">
                        <p className="p-2 bg-gradient-to-l from-lime-300 ">
                          For Retailers
                        </p>
                        <p className="p-2 bg-gradient-to-l from-lime-300 ">
                          For Brands
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="p-2 text-sm font-semibold">WM Retail</p>
                  <div>
                    <button
                      onClick={() => setExchangeDrop(!exchangeDrop)}
                      className="flex items-center focus:outline-none"
                    >
                      <p className="p-2 text-sm font-semibold">WM Exchange</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className={`w-4 h-4 text-white duration-300 transform fill-current ${
                          exchangeDrop && "rotate-180"
                        }`}
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    {exchangeDrop && (
                      <div className="space-y-2 text-xs font-semibold ">
                        <p className="p-2 bg-gradient-to-l from-cyan-300 ">
                          For Buyers
                        </p>
                        <p className="p-2 bg-gradient-to-l from-cyan-300 ">
                          For Sellers
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <p className="font-bold ">Add your business</p>
            <p className="font-bold ">Contact us</p>
            <p className="font-bold ">Support</p>
            <Link href="/dashboard">
              <p className="font-bold ">Dashboard</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
