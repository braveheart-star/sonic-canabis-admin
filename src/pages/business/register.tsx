import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";
import Select from "react-select";
import React, { useEffect, useState } from "react";

import AdminAPI from "../../lib/adminApi";
import { RegisterPayload } from "../../utils/type";
import { selectStyles } from "../../utils/global";
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

const businessType = [
  { value: "cbd", label: "CBD Store" },
  { value: "dispensary", label: "Dispensary" },
  { value: "delivery", label: "Delivery" },
  { value: "doctor", label: "Doctor" },
];

const licenseType = [
  { value: "adultCultivation", label: "Adult-Use Cultivation" },
  { value: "adultMfg", label: "Adult-Use Mfg." },
  { value: "Nonstorefront", label: "Adult-Use Nonstorefront" },
  { value: "retail", label: "Adult-Use Retail" },
  { value: "distributer", label: " Distributer" },
  { value: "event", label: "Event" },
  { value: "medicalCultivation", label: "Medical Cultivation" },
  { value: "medicalMfg", label: "Medical Mfg." },
  { value: "medicalRetail", label: "Medical Retail" },
  { value: "micro", label: " Microbusiness" },
  { value: "testing", label: " Testing Lab" },
];

const countryOptions = [
  { value: "usa", label: "United Stated" },
  { value: "canada", label: "Canada" },
];

export default function register() {
  const [businessRole, setBusinessRole] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [countrySelect, setCountrySelect] = useState(null);
  const [licenseType, setLicenseType] = useState(null);

  function handleSelectBusinessRole(role: any) {
    setBusinessRole(role);
    setRegisterPayload({
      ...registerPayload,
      businessRole: role.value,
    });
  }

  function handleSelectBusinessType(type: any) {
    setBusinessType(type);
    setRegisterPayload({
      ...registerPayload,
      businessType: type.value,
    });
  }
  function handleCountrySelect(country: any) {
    setCountrySelect(country);
    setAddress({
      ...address,
      country: country.value,
    });
  }

  function handleSelectLicenseType(type: any) {
    setLicenseType(type);
    setRegisterPayload({
      ...registerPayload,
      licenseType: type.value,
    });
  }
  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    postal: "",
    latitude: "",
    longitude: "",
  });

  const {
    data: position,
  } = useSWR(
    "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572",
    (url: string) => axios(url).then((r) => r.data)
  );

  const [registerPayload, setRegisterPayload] = useState<RegisterPayload>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessRole: "",
    businessName: "",
    businessType: "",
    address: address,
    website: "",
    licenseNumber: "",
    licenseExpiration: "",
    licenseType: "",
  });

  function handleOnSetValue(event: any) {
    setRegisterPayload({
      ...registerPayload,
      [event.target.name]: event.target.value.trim(),
    });
  }

  function handleSetAddress(event: any) {
    setAddress({
      ...address,
      [event.target.name]: event.target.value.trim(),
    });
    setRegisterPayload({
      ...registerPayload,
      address,
    });
  }

  function addMapPosition() {
    setAddress({
      ...address,
      latitude: position?.latitude,
      longitude: position?.longitude,
    });
  }

  useEffect(() => {
    if (position?.latitude !== undefined) addMapPosition();
  }, [position?.latitude]);

  async function handleRegister() {
    try {
      const { data, status } = await AdminAPI.register(registerPayload);

      if (status !== 200 || data?.error) {
        Swal.fire("Error", data.message, "error");
      }
      if (data?.admin) {
        Swal.fire(
          "Info",
          "Successfully submitted ! We will contact you after review.",
          "info"
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 bg-white lg:space-y-8 max-w-7xl">
        <div className="relative w-full h-56 rounded shadow">
          <Image
            src="/images/business/backBg.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
          <div className="absolute text-2xl font-bold text-white left-8 sm:text-3xl sm:left-24 top-1/3">
            <p>Get started</p>
            <p>for your business today !</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 lg:space-y-8 ">
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">
              Add your business
            </p>
            <p className="text-sm">
              Complete and submit the form below. Your business will appear on
              Weedmaps
              <span className="mx-1 font-semibold ">
                after our account team contacts you
              </span>
              and verifies the information.
            </p>
            <p className="text-sm ">
              If you are submitting this application on behalf of a company or
              other legal entity, you represent that you have the authority to
              bind such entity to the terms and conditions set forth herein.
            </p>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">Contact</p>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">First name</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="firstName"
                  onChange={handleOnSetValue}
                />
              </div>
              <div className="space-y-1 text-sm">
                <p>Last name</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="lastName"
                  onChange={handleOnSetValue}
                />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Phone number</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="phone"
                  onChange={handleOnSetValue}
                />
              </div>
              <div className="space-y-1 text-sm">
                <p>Email</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="email"
                  onChange={handleOnSetValue}
                />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Business role</p>
                <div className="border ">
                  <BusinessRoleSelect
                    value={businessRole}
                    onChange={handleSelectBusinessRole}
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
                <input
                  className="w-full px-3 py-2 border "
                  name="businessName"
                  onChange={handleOnSetValue}
                />
              </div>
              <div className="space-y-1 text-sm">
                <p>Business type</p>
                <div className="border ">
                  <BusinessTypeSelect
                    value={businessType}
                    onChange={handleSelectBusinessType}
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Country</p>
                <div className="border ">
                  <CountrySelect
                    value={countrySelect}
                    onChange={handleCountrySelect}
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
                <input
                  className="w-full px-3 py-2 border "
                  name="city"
                  onChange={handleSetAddress}
                />
              </div>
              <div className="space-y-1 text-sm">
                <p>State/Province</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="state"
                  onChange={handleSetAddress}
                />
              </div>
            </div>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Postal code</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="postal"
                  onChange={handleSetAddress}
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="">Website</p>
              <input
                className="w-full px-3 py-2 border "
                name="website"
                onChange={handleOnSetValue}
              />
            </div>
          </div>
          <div className="space-y-2 lg:space-y-4 ">
            <p className="font-bold text-black lg:text-lg ">License</p>
            <div className="grid sm:gap-x-2 gap-y-1 sm:gap-y-0 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">License number</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="licenseNumber"
                  onChange={handleOnSetValue}
                />
              </div>
              <div className="space-y-1 text-sm">
                <p className="">License type</p>
                <div className="border ">
                  <LicenseSelect
                    value={licenseType}
                    onChange={handleSelectLicenseType}
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:gap-x-2 sm:grid-cols-2 ">
              <div className="space-y-1 text-sm">
                <p className="">Expiration</p>
                <input
                  className="w-full px-3 py-2 border "
                  name="licenseExpiration"
                  onChange={handleOnSetValue}
                />
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
          <button
            onClick={handleRegister}
            className="w-full py-2 text-sm font-bold text-white bg-cyan-500 "
          >
            Add Business
          </button>
        </div>
      </div>
    </Layout>
  );
}

interface selectProps {
  value: any;
  onChange: Function;
}

const BusinessRoleSelect = (props: selectProps) => {
  const { value, onChange } = props;

  return (
    <Select
      styles={selectStyles}
      options={businessRole}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};

const BusinessTypeSelect = (props: selectProps) => {
  const { value, onChange } = props;

  return (
    <Select
      styles={selectStyles}
      options={businessType}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};

const CountrySelect = (props: selectProps) => {
  const { value, onChange } = props;

  return (
    <Select
      styles={selectStyles}
      options={countryOptions}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};

const LicenseSelect = (props: selectProps) => {
  const { value, onChange } = props;

  return (
    <Select
      styles={selectStyles}
      options={licenseType}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};
