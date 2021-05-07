import React from "react";
import Image from "next/image";

export const DemoTable = (props: any) => {
  const { tableData } = props;

  const items = tableData?.data?.items;
  console.log("🚀 ~ file: Table.tsx ~ line 7 ~ DemoTable ~ items", items);
  return (
    <div className="w-full overflow-x-auto border rounded whitespace-nowrap">
      <div className="w-full text-xs text-center bg-gray-100 shadow min-w-max ">
        {renderTableHeader()}
        {items && renderTableBody(items)}
      </div>
    </div>
  );
};

function renderTableHeader() {
  return (
    <div className="flex items-center flex-shrink-0 p-2 space-x-1 text-sm text-gray-500 bg-gray-100 ">
      <div className="flex-shrink-0 w-10 ">
        <input type="checkbox" />
      </div>

      <div className="grid w-full grid-cols-10 font-semibold uppercase ">
        <div className="p-1 px-2 "> id</div>
        <div className="p-1 px-2 "> image</div>
        <div className="col-span-2 p-1 px-2 ">title</div>
        <div className="p-1 px-2 ">price</div>
        <div className="p-1 px-2 ">category</div>
        <div className="p-1 px-2 ">subCategory</div>
        <div className="col-span-2 p-1 px-2 ">last updated</div>
        <div className="grid grid-cols-2 p-1 px-2 ">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

function renderTableBody(data: any) {
  return (
    <div className="bg-white ">
      {data.map((item: any, idx: number) => {
        return (
          <div
            key={idx}
            className="flex items-center flex-shrink-0 p-2 space-x-1 text-sm text-gray-500 border-t hover:bg-coolGray-50 "
          >
            <div className="flex-shrink-0 w-10 ">
              <input type="checkbox" />
            </div>

            <div className="grid items-center w-full grid-cols-10 font-semibold uppercase ">
              <div className="p-1 px-2 ">{item.id}</div>
              <div className="p-1 px-2 ">
                <div className="flex-shrink-0 w-16 h-16 mx-auto cursor-pointer ">
                  {/* <img
                    src={item.filename}
                    alt="logo"
                    className="w-full h-full "
                  /> */}

                  {item.filename?.length > 0 && (
                    <Image
                      src={`http://canabismap.imgix.net/${item.filename}`}
                      alt="logo"
                      width={2000}
                      height={2000}
                    />
                  )}
                </div>
              </div>
              <div className="col-span-2 p-1 px-2">{item.title}</div>
              <div className="p-1 px-2 ">{item.price}</div>
              <div className="p-1 px-2 ">{item.category}</div>
              <div className="p-1 px-2 ">{item.subCategory}</div>
              <div className="col-span-2 p-1 px-2">{item.updatedAt}</div>
              <div className="grid grid-cols-2 p-1 px-2 ">
                <button className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-500 fill-current "
                  >
                    <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                  </svg>
                </button>
                <button className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-500 fill-current "
                  >
                    <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
