import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import { Layout } from "../../components/common/Layout";

const businessRole = [
  { value: "advertising", label: "Advertising Manager" },
  { value: "coo", label: "COO" },
  { value: "finance", label: "Finance Manager" },
  { value: "partner", label: "Partner" },
  { value: "president", label: "President" },
  { value: "marketing", label: "Marketing Manager" },
  { value: "operation", label: "Operations Manager" },
  { value: "other", label: "Other" },
];

export default function contact() {
  const [businessRole, setBusinessRole] = useState(null);

  function handleSelectRole(role: any) {
    setBusinessRole(role);
  }

  return (
    <Layout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 bg-white lg:space-y-8 max-w-7xl">
        <div className="relative w-full h-56 rounded shadow">
          <Image
            src="/images/contact/backBg.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
          <div className="absolute text-2xl font-bold text-black left-8 sm:text-3xl sm:left-24 top-1/3">
            <p>Have questions?</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 lg:space-y-8 ">
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">
              Fill in your information
            </p>
            <p className="text-sm ">
              Fill out this form and we’ll be in touch as soon as possible.
              Please only submit the form if you can officially represent the
              business and act on its behalf.
            </p>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">Contact</p>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">First name</p>
                <input className="w-full px-3 py-2 border " />
              </div>
              <div className="space-y-1 text-sm">
                <p>Last name</p>
                <input className="w-full px-3 py-2 border " />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Phone number</p>
                <input className="w-full px-3 py-2 border " />
              </div>
              <div className="space-y-1 text-sm">
                <p>Email</p>
                <input className="w-full px-3 py-2 border " />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Business role</p>
                <div className="border ">
                  <BusinessSelect
                    value={businessRole}
                    onChange={handleSelectRole}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">Business</p>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Business name</p>
                <input className="w-full px-3 py-2 border " />
              </div>
              <div className="space-y-1 text-sm">
                <p>Business type</p>
                <div className="border ">
                  <BusinessSelect
                    value={businessRole}
                    onChange={handleSelectRole}
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Country</p>
                <div className="border ">
                  <BusinessSelect
                    value={businessRole}
                    onChange={handleSelectRole}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="">Address line 1</p>
              <input className="w-full px-3 py-2 border " />
            </div>
            <div className="space-y-1 text-sm">
              <p className="">Address line 2</p>
              <input className="w-full px-3 py-2 border " />
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">City</p>
                <input className="w-full px-3 py-2 border " />
              </div>
              <div className="space-y-1 text-sm">
                <p>State/Province</p>
                <input className="w-full px-3 py-2 border " />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Postal code</p>
                <input className="w-full px-3 py-2 border " />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="">Website</p>
              <input className="w-full px-3 py-2 border " />
            </div>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">License</p>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">License number</p>
                <input className="w-full px-3 py-2 border " />
              </div>
              <div className="space-y-1 text-sm">
                <p className="">License type</p>
                <div className="border ">
                  <BusinessSelect
                    value={businessRole}
                    onChange={handleSelectRole}
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:gap-x-2 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Expiration</p>
                <input className="w-full px-3 py-2 border " />
              </div>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">
              Terms and Conditions
            </p>
            <p className="text-sm ">
              1. You consent to CannabisMap’ collection of your name, phone
              number, email address, business name, business address, and other
              business information for the limited purposes of verifying and
              evaluating your application to add your business to the
              CannabisMap platform, for any purposes related to your commercial
              use of our products or services and for our representatives to
              contact you with respect thereto.
            </p>
            <p className="text-sm ">
              2. You acknowledge that you are not a minor as legally defined in
              your municipality, state, province, territory, or country.
            </p>
            <p className="text-sm ">
              3. You agree that CannabisMap may share your personal data with
              third parties for the limited purpose of providing you with the
              Authorized Communications.
            </p>
            <p className="text-sm ">
              4. You understand that you will have the opportunity to
              unsubscribe from the Authorized Communications and request the
              deletion of your personal data from CannabisMap’ systems at any
              time.
            </p>
            <p className="text-sm ">
              5. You acknowledge that you have read and agree to be bound by the
              CannabisMap
              <span className="mx-2 font-semibold text-blue-500">
                Terms of Use
              </span>
              and
              <span className="mx-2 font-semibold text-blue-500 ">
                Privacy Policy.
              </span>
            </p>
            <p className="text-sm ">
              6. You acknowledge that you have read and agree to be bound by the
              CannabisMap
              <span className="mx-2 font-semibold text-blue-500 ">
                Commercial Terms.
              </span>
            </p>
          </div>
          <div className="flex items-center text-sm ">
            <input
              type="checkBox"
              // onChange={(e) => setCheck1(e.target.checked)}
            />
            <p className="ml-2 text-sm text-gray-500">
              I have read and agree to the above terms and conditionss
            </p>
          </div>
          <button className="w-full py-2 text-sm font-bold text-white bg-green-500 ">
            Add Business
          </button>
        </div>
      </div>
    </Layout>
  );
}

interface businessProps {
  value: any;
  onChange: Function;
}

const BusinessSelect = (props: businessProps) => {
  const { value, onChange } = props;
  const styles = {
    control: (provided: any) => ({
      ...provided,
      height: "100%",
      padding: "0 0 0 10px",
      border: 0,
      boxShadow: "none",
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      paddingLeft: "20px",
      paddingRight: "20px",
      color: !state.isSelected ? "#838eab" : "#fff",
      background: !state.isSelected && "none",
      cursor: "pointer",
    }),
  };
  return (
    <Select
      styles={styles}
      options={businessRole}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};
