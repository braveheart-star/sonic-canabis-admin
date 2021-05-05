import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import ImageUploading from "react-images-uploading";

import { AdminLayout } from "../../components/common/AdminLayout";

const categories = [
  { value: "vape", label: "Vape Pens" },
  { value: "flower", label: "Flower" },
  { value: "concentrate", label: "Concentrate" },
  { value: "edible", label: "Edible" },
];

const vapeOptions = [
  { value: "battery", label: "Batteries" },
  { value: "cartridge", label: "Cartridge" },
  { value: "disposable", label: "Disposable" },
  { value: "pods", label: "Pods" },
];

const flowerOptions = [
  { value: "infused", label: "Infused Flower" },
  { value: "preRoll", label: "Pre Roll" },
  { value: "shake", label: "Shake" },
  { value: "pods", label: "Pods" },
];

const concentrateOptions = [
  { value: "budder", label: "Budder" },
  { value: "crumble", label: "Crumble" },
  { value: "crystalline", label: "Crystalline" },
  { value: "distillate", label: "Distillate" },
];

const edibleOptions = [
  { value: "baked", label: "Baked Goods" },
  { value: "beverages", label: "Beverages" },
  { value: "candy", label: "Candy" },
  { value: "cooking", label: "Cooking Ingredients" },
  { value: "dairy", label: "Dairy Free" },
];

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

export default function addProduct() {
  const [images, setImages] = useState([]);

  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  function handleSelectCategory(category: any) {
    setCategory(category);
  }

  function handleSelectSubCategory(subCategory: any) {
    setSubCategory(subCategory);
  }

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 max-w-7xl">
        <Link href="/product">
          <button className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-3 h-3 text-gray-600 fill-current "
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
            <span>Products</span>
          </button>
        </Link>

        <p className="text-2xl font-bold lg:text-4xl ">Add new product</p>
        <div className="w-full mt-8 ">
          <div className="grid lg:grid-cols-12 gap-x-16 gap-y-4 lg:gap-y-0">
            <div className="space-y-4 lg:col-span-8 lg:space-y-8 ">
              <div className="p-4 space-y-4 bg-white border xl:p-8">
                <p className="text-lg font-bold ">Title , Description</p>

                <div className="space-y-1 ">
                  <p className="text-sm text-gray-500 lg:text-base">Title</p>
                  <input className="w-full px-2 py-1 bg-gray-100 border rounded" />
                </div>
                <div className="grid grid-rows-2 gap-2 sm:grid-cols-7 ">
                  <div className="space-y-1 sm:row-span-2 sm:col-span-5">
                    <p className="text-sm text-gray-500 lg:text-base">
                      Product Description
                    </p>
                    <textarea className="w-full px-2 py-1 bg-gray-100 border rounded h-28" />
                  </div>
                  <div className="grid sm:col-span-2 sm:grid-rows-2 sm:row-span-2 gap-y-2">
                    <div className="space-y-1 ">
                      <p className="text-sm text-gray-500 lg:text-base">
                        Total THC
                      </p>
                      <input className="w-full px-2 py-1 bg-gray-100 border rounded" />
                    </div>
                    <div className="space-y-1 ">
                      <p className="text-sm text-gray-500 lg:text-base">
                        Total CBD
                      </p>
                      <input className="w-full px-2 py-1 bg-gray-100 border rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-4 bg-white border xl:p-8">
                <p className="text-lg font-bold">Images</p>

                <div className="flex ">
                  <div className="m-auto text-center">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
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
                                    className="w-4 h-4 text-green-500 fill-current"
                                  >
                                    <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z" />
                                  </svg>
                                  <p className="text-green-500 ">
                                    Upload images
                                  </p>
                                </button>
                              </div>
                            </div>
                          )}
                          &nbsp;
                          {/* <button onClick={onImageRemoveAll}>
                            Remove all images
                          </button> */}
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
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-4 bg-white border xl:p-8">
                <p className="text-lg font-bold ">Pricing , Weight</p>
                <div className="grid space-y-2 sm:grid-cols-3 gap-x-4 sm:space-y-0">
                  <div className="space-y-1 ">
                    <p className="text-sm text-gray-500 lg:text-base">
                      Price per Weight
                    </p>
                    <input className="px-2 py-1 bg-gray-100 border rounded" />
                  </div>
                  <div className="space-y-1 ">
                    <p className="text-sm text-gray-500 lg:text-base">Weight</p>
                    <input className="px-2 py-1 bg-gray-100 border rounded" />
                  </div>
                  <div className="space-y-1 ">
                    <p className="text-sm text-gray-500 lg:text-base">Unit</p>
                    <input className="px-2 py-1 bg-gray-100 border rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white lg:col-span-4 lg:space-y-8 xl:p-8">
              <div className="space-y-2 ">
                <span className="font-bold ">Categories</span>
                <div className="border ">
                  <CategorySelect
                    value={category}
                    onChange={handleSelectCategory}
                  />
                </div>
              </div>
              <div className="space-y-2 ">
                <span className="font-bold ">SubCategories</span>
                <div className="border ">
                  <RenderSubCategory
                    selectedCategory={category}
                    handleChange={handleSelectSubCategory}
                    value={subCategory}
                  />
                </div>
              </div>
              <div className="space-y-2 ">
                <span className="font-bold ">Verified Brand</span>

                <div className="flex items-center max-w-sm px-4 py-1 space-x-2 border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-3 h-3 text-gray-500 fill-current "
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>
                  <input
                    placeholder="Brands"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

interface categoryProps {
  value: any;
  onChange: Function;
}

const CategorySelect = (props: categoryProps) => {
  const { value, onChange } = props;

  return (
    <Select
      styles={styles}
      options={categories}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};

interface subCategoryProps {
  selectedCategory: any;
  value: any;
  handleChange: Function;
}

function RenderSubCategory(props: subCategoryProps) {
  const { selectedCategory, value, handleChange } = props;

  function getOptions(category: any) {
    switch (category?.value) {
      case "vape":
        return vapeOptions;
      case "flower":
        return flowerOptions;
      case "concentrate":
        return concentrateOptions;
      case "edible":
        return edibleOptions;
    }
  }

  return (
    <Select
      styles={styles}
      options={getOptions(selectedCategory)}
      onChange={(e: any) => handleChange(e)}
      value={value}
    />
  );
}
