import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container p-4 mx-auto space-y-8 text-gray-700 border max-w-7xl">
      <div className="grid items-center grid-cols-1 py-8 mx-auto border border-red-500 lg:grid-cols-2">
        <div className="border ">
          <p className="my-4 text-5xl font-bold tracking-wider">
            Kick start your
          </p>
          <p className="text-5xl font-bold tracking-wider">
            <span className="mr-2 bg-gradient-to-l from-emerald-300">
              cannabis
            </span>
            business
          </p>
          <div className="flex px-4 mt-12 space-x-6">
            <button className="px-4 py-2 font-semibold text-white bg-orange-600 rounded-full">
              Get started
            </button>
            <button className="px-4 py-2 font-semibold border rounded-full">
              Contact Us
            </button>
          </div>
          <div className="mt-20 font-semibold text-center ">
            <p>Find out more</p>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="mx-auto mt-3 text-gray-700 fill-current"
            >
              <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
            </svg>
          </div>
        </div>
        <div className="flex-shrink-0 mx-auto ">
          <Image
            src="/images/home/back.svg"
            alt="logo"
            width={2000}
            height={1500}
          />
        </div>
      </div>

      <div className="relative flex w-full h-56 border border-red-500">
        <Image
          src="/images/home/banner1.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
      </div>

      <div className="grid items-center grid-cols-1 mx-auto border border-red-500 lg:grid-cols-2">
        <div className="flex-shrink-0 mx-auto ">
          <Image
            src="/images/home/retailer.svg"
            alt="logo"
            width={2000}
            height={1000}
          />
        </div>
        <div className="flex-shrink-0 mx-auto ">
          <Image
            src="/images/home/brand.svg"
            alt="logo"
            width={2000}
            height={1000}
          />
        </div>
      </div>

      <div className="relative flex w-full h-56 border border-red-500 ">
        <Image
          src="/images/home/banner2.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-4 border border-red-500">
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame1.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame2.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame3.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame4.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame5.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
        <div className="relative flex w-full h-56 rounded ">
          <Image
            src="/images/home/frame6.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
      </div>

      <div className="relative flex w-full h-56 border border-red-500">
        <Image
          src="/images/home/banner3.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
        <div className="absolute flex space-x-4 left-1/2 top-1/2">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full ">
            Add your business
          </button>

          <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-full ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
