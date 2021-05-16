import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";

import Swal from "sweetalert2";
import ImageUploading from "react-images-uploading";

import {
  AccessibleIcon,
  AgeIcon,
  AtmIcon,
  CurbsideIcon,
  MedicalIcon,
  SecurityIcon,
} from "../../components/icons";

import storage from "../../utils/storage";
import adminApi from "../../lib/adminApi";
// import { TimeLine } from "../../components/TimeLine";
import { AdminLayout } from "../../components/common/AdminLayout";
import { SocialMedia } from "../../components/SocialMedia";
import { ShopDataPayload } from "../../utils/type";

const amenitiesData = [
  {
    payload: "access",
    text: "Accessible",
    icon: AccessibleIcon,
  },
  {
    payload: "curbside",
    text: "Curbside pickup",
    icon: CurbsideIcon,
  },
  {
    payload: "medical",
    text: "Medical",
    icon: MedicalIcon,
  },
  {
    payload: "security",
    text: "Security",
    icon: SecurityIcon,
  },
  {
    payload: "minimum",
    text: "Minimum Age",
    icon: AgeIcon,
  },
  {
    payload: "atm",
    text: "ATM",
    icon: AtmIcon,
  },
];

export default function shop() {
  const { data: token } = useSWR("accessToken", storage);
  const { data: business } = useSWR(
    ["/api/admin/self", token],
    adminApi.getCurrentAdmin
  );
  console.log("🚀 ~ file: index.tsx ~ line 60 ~ shop ~ business", business);

  useEffect(() => {
    if (business?.data?.amenity) setAmenities([...business?.data?.amenity]);
  }, [business?.data?.amenity]);

  const [editable, setEdit] = useState(false);

  // const [activeDay, setActiveDay] = useState(0);
  const [images, setImages] = useState<any[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const [shopData, setShopData] = useState<ShopDataPayload>({
    firstName: "",
    lastName: "",
    introduction: "",
    about: "",
    announcement: "",
    customers: "",
    amenity: [],
  });

  useEffect(() => {
    setShopData({
      ...shopData,
      firstName: business?.data?.firstName,
      lastName: business?.data?.lastName,
      introduction: business?.data?.introduction,
      about: business?.data?.about,
      announcement: business?.data?.announcement,
      customers: business?.data?.customers,
      amenity: business?.data?.amenity,
    });
  }, [business?.data]);

  function handleAmenities(amenity: string) {
    if ([...amenities].includes(amenity)) {
      setAmenities([...amenities.filter((i) => i !== amenity)]);
      return;
    }
    amenities.push(amenity);
    setAmenities([...amenities]);
    setShopData({
      ...shopData,
      amenity: amenities,
    });
  }

  function handleImage(imageList: any) {
    setImages(imageList);
  }

  function handleOnSetValue(event: any) {
    setShopData({
      ...shopData,
      [event.target.name]: event.target.value,
    });
  }

  function handleEditButton() {
    if (editable) {
      setEdit(false);
      setAmenities([...business?.data?.amenity]);
      return;
    }
    setEdit(true);
  }

  async function handleUpdateProfile() {
    setEdit(false);
    const { data, status } = await adminApi.updateStoreProfile(
      business?.data?.id,
      shopData,
      token
    );
    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
    }
    if (status === 200) {
      Swal.fire("Success", "Successfully submitted ! ", "success");
      if (images.length > 0)
        await adminApi.uploadImage(images[0].file, token, data.id);
    }
  }

  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 max-w-7xl">
        <div className="items-baseline justify-between space-y-4 lg:flex ">
          <p className="text-2xl font-bold lg:text-4xl ">
            Manage Store Profile
          </p>
          <div className="flex space-x-4 ">
            <button
              onClick={handleEditButton}
              className="w-32 py-2 font-semibold tracking-wider text-white uppercase bg-yellow-500 rounded"
            >
              {editable ? "cancel" : "edit"}
            </button>

            <button
              disabled={!editable}
              onClick={handleUpdateProfile}
              className={`w-32 py-2 font-semibold tracking-wider text-white uppercase bg-green-500 rounded ${
                !editable && "opacity-50"
              }`}
            >
              save
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-4 lg:gap-y-0 ">
          <div className=" lg:col-span-8 lg:space-y-8">
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <div className="space-y-2 lg:mr-4 ">
                <p className="text-gray-500 ">Store name</p>
                <p className="w-full px-3 py-1 border rounded lg:w-1/2 bg-gray-50">
                  {business?.data?.businessName}
                </p>
              </div>
              <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:grid-cols-2 gap-x-4">
                <div className="w-full space-y-2">
                  <p className="text-gray-500 ">first name</p>
                  {!editable ? (
                    <p className="w-full px-3 py-1 border rounded bg-gray-50">
                      {business?.data?.firstName ?? ""}
                    </p>
                  ) : (
                    <input
                      onChange={handleOnSetValue}
                      name="firstName"
                      className="w-full px-3 py-1 border rounded bg-gray-50"
                      value={shopData.firstName}
                    />
                  )}
                </div>
                <div className="space-y-2 ">
                  <p className="text-gray-500 ">last name</p>
                  {!editable ? (
                    <p className="w-full px-3 py-1 border rounded bg-gray-50">
                      {business?.data?.lastName ?? ""}
                    </p>
                  ) : (
                    <input
                      onChange={handleOnSetValue}
                      name="lastName"
                      className="w-full px-3 py-1 border rounded bg-gray-50"
                      value={shopData.lastName}
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:grid-cols-2 gap-x-4">
                <div className="space-y-2 ">
                  <p className="text-gray-500 ">Phone</p>
                  <p className="w-full px-3 py-1 border rounded bg-gray-50">
                    {business?.data?.phone}
                  </p>
                </div>
                <div className="space-y-2 ">
                  <p className="text-gray-500 ">Email</p>
                  <p className="w-full px-3 py-1 border rounded bg-gray-50">
                    {business?.data?.email}
                  </p>
                </div>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Address</p>
                <p className="w-full px-3 py-1 border rounded bg-gray-50">
                  {`${business?.data?.address?.city}   ${business?.data?.address?.state}`}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Introduction</p>
                {!editable ? (
                  <p className="w-full px-2 py-1 border rounded bg-gray-50 h-28">
                    {business?.data?.introduction ?? ""}
                  </p>
                ) : (
                  <textarea
                    onChange={handleOnSetValue}
                    name="introduction"
                    className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                    value={shopData.introduction}
                  />
                )}
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">About us</p>
                {!editable ? (
                  <p className="w-full px-2 py-1 border rounded bg-gray-50 h-28">
                    {business?.data?.about ?? ""}
                  </p>
                ) : (
                  <textarea
                    onChange={handleOnSetValue}
                    name="about"
                    className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                    value={shopData.about}
                  />
                )}
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Announcement</p>
                {!editable ? (
                  <p className="w-full px-2 py-1 border rounded bg-gray-50 h-28">
                    {business?.data?.announcement ?? ""}
                  </p>
                ) : (
                  <textarea
                    onChange={handleOnSetValue}
                    name="announcement"
                    className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                    value={shopData.announcement}
                  />
                )}
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <p className="font-semibold text-gray-700 ">Open Hours</p>
              {/* <TimeLine activeDay={activeDay} setActiveDay={setActiveDay} /> */}
            </div>
          </div>
          <div className="space-y-4 lg:space-y-8 lg:col-span-4 ">
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">
                  Amenities
                </p>
                <p className="text-gray-500 ">Choose your store amenities</p>
              </div>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
                {amenitiesData.map((item, idx) => {
                  return (
                    <button
                      key={idx}
                      disabled={!editable}
                      onClick={() => handleAmenities(item.payload)}
                      className="text-sm text-center focus:outline-none"
                    >
                      <item.icon
                        className={`w-6 h-6 mx-auto fill-current ${
                          amenities.includes(item.payload)
                            ? "text-green-500"
                            : "text-trueGray-400"
                        }`}
                      />
                      <span
                        className={
                          amenities.includes(item.payload)
                            ? "text-green-500"
                            : "text-gray-500"
                        }
                      >
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">License</p>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">State License Number</p>
                <p className="w-full px-3 py-1 border rounded bg-gray-50">
                  {business?.data?.licenseNumber}
                </p>
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">
                  First-Time Customers
                </p>
              </div>
              <div className="space-y-2 ">
                {!editable ? (
                  <p className="w-full px-2 py-1 border rounded bg-gray-50 h-28">
                    {business?.data?.customers ?? ""}
                  </p>
                ) : (
                  <textarea
                    onChange={handleOnSetValue}
                    name="customers"
                    className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                    value={shopData.customers}
                  />
                )}
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">Media</p>
              </div>
              <div className="space-y-2 ">
                <div className="flex justify-center text-center ">
                  {business?.data?.imageUrl?.length > 0 && !editable ? (
                    <Image
                      src={`http://canabismap.imgix.net/${business?.data?.imageUrl}`}
                      alt="logo"
                      width={2000}
                      height={1300}
                    />
                  ) : (
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={handleImage}
                      maxNumber={1}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        // onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          {!(imageList.length > 0) && (
                            <div
                              style={isDragging ? { color: "red" } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                              className="text-gray-500 "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="w-40 h-32 fill-current text-trueGray-400"
                              >
                                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                              </svg>
                              <div className="flex justify-center ">
                                <button className="flex items-center justify-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="w-4 h-4 text-gray-400 fill-current"
                                  >
                                    <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z" />
                                  </svg>
                                  <p className="font-semibold text-gray-400 ">
                                    Upload images
                                  </p>
                                </button>
                              </div>
                            </div>
                          )}
                          &nbsp;
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img
                                src={image["data_url"]}
                                alt=""
                                width="100"
                                className="h-32 w-44"
                              />
                              <div className="flex justify-center space-x-3 text-center image-item__btn-wrapper">
                                <button
                                  className="flex items-center space-x-2 text-gray-500"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-gray-500 fill-current "
                                  >
                                    <path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" />
                                  </svg>
                                  <span>Update</span>
                                </button>
                                <button
                                  className="flex items-center space-x-2 text-gray-500"
                                  onClick={() => onImageRemove(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-gray-500 fill-current "
                                  >
                                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
                                  </svg>
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  )}
                </div>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
