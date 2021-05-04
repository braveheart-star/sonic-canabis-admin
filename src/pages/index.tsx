import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container p-4 mx-auto space-y-4 text-gray-700 bg-white lg:space-y-8 max-w-7xl">
      <div className="grid items-center grid-cols-1 py-4 mx-auto lg:py-8 lg:grid-cols-2">
        <div className="flex-shrink-0 mx-auto lg:hidden ">
          <Image
            src="/images/home/back.svg"
            alt="logo"
            width={2000}
            height={1500}
          />
        </div>
        <div>
          <p className="my-4 text-3xl font-bold tracking-wider lg:text-5xl">
            Kick start your
          </p>
          <p className="text-3xl font-bold tracking-wider lg:text-5xl">
            <span className="mr-2 bg-gradient-to-l from-emerald-300">
              cannabis
            </span>
            business
          </p>
          <div className="flex justify-center px-4 mt-12 space-x-6 lg:justify-start">
            <Link href="/business">
              <button className="px-4 py-2 font-semibold text-white bg-orange-600 rounded-full">
                Get started
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-4 py-2 font-semibold border-2 rounded-full">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="mt-8 font-semibold text-center lg:mt-20 ">
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
        <div className="flex-shrink-0 hidden mx-auto lg:block">
          <Image
            src="/images/home/back.svg"
            alt="logo"
            width={2000}
            height={1500}
          />
        </div>
      </div>

      <div className="relative flex w-full h-56">
        <Image
          src="/images/home/banner1.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
        <div className="absolute text-black left-20 top-1/3">
          <p className="text-3xl font-bold tracking-wider">
            <span className="mr-2 bg-gradient-to-l from-yellow-300">
              Solutions
            </span>
            for
          </p>
          <p className="text-3xl font-bold tracking-wider">your business</p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 mx-auto lg:grid-cols-2">
        <div className="flex-shrink-0 mx-auto ">
          <Image
            src="/images/home/retailer.svg"
            alt="logo"
            width={2000}
            height={1300}
          />
        </div>
        <div className="flex-shrink-0 mx-auto ">
          <Image
            src="/images/home/brand.svg"
            alt="logo"
            width={2000}
            height={1300}
          />
        </div>
      </div>

      <div className="relative flex w-full h-56 ">
        <Image
          src="/images/home/banner2.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
        <div className="absolute text-black lg:left-1/2 top-1/4 lg:top-1/3">
          <p className="text-3xl font-bold tracking-wider">
            Branding solutions
          </p>
          <p className="mt-2 text-3xl font-bold tracking-wider">
            <span className="mr-2 bg-gradient-to-l from-rose-300">
              customized
            </span>
            for your business
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-4 lg:grid-cols-3">
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

      <div className="relative flex w-full h-56">
        <Image
          src="/images/home/banner3.svg"
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded " // just an example
        />
        <div className="absolute space-y-2 lg:left-1/2 top-1/3">
          <p className="px-4 font-bold text-black lg:text-2xl">
            Ready to get started with CanabisMap?
          </p>
          <div className="flex justify-center space-x-4 ">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full ">
              Add your business
            </button>

            <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-full ">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
