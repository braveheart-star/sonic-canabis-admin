import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-4 mx-auto border max-w-7xl">
      <div className="grid items-center grid-cols-1 mx-auto lg:grid-cols-2">
        <div className="">
          <p className="my-4 text-4xl font-bold tracking-wider">
            Kick start your
          </p>
          <p className="text-4xl font-bold tracking-wider">
            <span className="mr-2 bg-gradient-to-l from-emerald-300">
              cannabis
            </span>
            business
          </p>
          <div className="flex mt-8 space-x-2">
            <button className="px-4 py-2 text-white bg-orange-600 rounded-2xl">
              Get started
            </button>
            <button className="px-4 py-2 border rounded-2xl">Contact Us</button>
          </div>
        </div>
        <div>
          <div className="flex-shrink-0 mx-auto cursor-pointer ">
            <Image
              src="/images/home/back.svg"
              alt="logo"
              width={2000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
