import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/components.module.scss";

interface MobileDropInterface {
  menuDrop: boolean;
}

export const AdminMobileDrop = (props: MobileDropInterface) => {
  const { menuDrop } = props;

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-4/5 min-h-screen bg-teal-500 text-white lg:hidden ${
        menuDrop ? `${styles.mobileOpen}` : `${styles.mobileClose}`
      }`}
    >
      <div className="max-h-screen overflow-y-scroll ">
        <div className="p-5 space-y-8 ">
          <div className="space-y-8 ">
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

            <Link href="/">
              <p className="font-bold ">Home</p>
            </Link>

            <Link href="/dashboard">
              <p className="font-bold ">Dashboard</p>
            </Link>
            <Link href="/product">
              <p className="font-bold ">Products</p>
            </Link>
            <Link href="/dashboard/order">
              <p className="font-bold ">Orders</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
