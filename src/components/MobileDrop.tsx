import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR, { mutate } from "swr";

import { Maybe } from "./common/Maybe";
import storage from "../utils/storage";
import checkLogin from "../utils/checkLogin";
import styles from "../styles/components.module.scss";

interface MobileDropInterface {
  dropdown: boolean;
  setDropdown: Function;
}

export const MobileDrop = (props: MobileDropInterface) => {
  const { dropdown, setDropdown } = props;
  const { data: accessToken } = useSWR("accessToken", storage);
  const isLoggedIn = checkLogin(accessToken);

  const handleLogout = async () => {
    window.localStorage.removeItem("accessToken");
    mutate("accessToken", "");
    setDropdown(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-4/5 min-h-screen bg-white lg:hidden ${
        dropdown ? `${styles.mobileOpen}` : `${styles.mobileClose}`
      }`}
    >
      <div className="max-h-screen overflow-y-scroll">
        <div className="p-5 text-gray-700">
          <Link href="/">
            <div className="flex-shrink-0 w-20 h-20 mx-auto ">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={2000}
                height={2000}
              />
            </div>
          </Link>
          <Maybe condition={!isLoggedIn}>
            <div className="flex py-4 space-x-6 sm:space-x-8 ">
              <Link href="/auth/login">
                <button className="font-bold ">Log in</button>
              </Link>
              <Link href="/auth/register">
                <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg sm:px-6 sm:py-2">
                  Sign up
                </button>
              </Link>
            </div>
          </Maybe>
          <Maybe condition={isLoggedIn}>
            <div className="py-4 ">
              <button
                onClick={handleLogout}
                className="px-4 py-1 font-bold text-white bg-yellow-500 rounded-lg sm:px-6 sm:py-2"
              >
                Log out
              </button>
            </div>
          </Maybe>
          <div className="py-3 border-t">
            <Link href="/">
              <p>Download the app</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Dispensaries</p>
            </Link>
            <Link href="/shop">
              <p>Deliveries</p>
            </Link>
            <Link href="/support">
              <p>Map</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Products</p>
            </Link>
            <Link href="/shop">
              <p>Deals</p>
            </Link>
            <Link href="/support">
              <p>Strains</p>
            </Link>
            <Link href="/support">
              <p>Brands</p>
            </Link>
            <Link href="/support">
              <p>Order online</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Learn</p>
            </Link>
            <Link href="/shop">
              <p>News</p>
            </Link>
            <Link href="/support">
              <p>Help center</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>CBD Stores</p>
            </Link>
            <Link href="/shop">
              <p>Doctors</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>WM Business</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Report a bug</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
