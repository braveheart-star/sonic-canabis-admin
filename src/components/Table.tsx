import React from "react";

const headings = [
  {
    value: "Image",
  },
  {
    value: "Name",
  },
  {
    value: "Category",
  },
  {
    value: "Product ID",
  },
  {
    value: "Price",
  },
  {
    value: "Last Updated",
  },
  {
    value: "Edit",
  },
  {
    value: "Delete",
  },
];

export const DemoTable = (props: any) => {
  const { users } = props;
  return (
    <div className="relative overflow-x-auto overflow-y-auto bg-white rounded-lg shadow whitespace-nowrap ">
      <table className="relative w-full bg-white border-collapse table-auto table-striped">
        <thead>
          <tr className="text-left">
            <th className="sticky top-0 px-3 py-2 bg-gray-100 border-b border-gray-200">
              <label className="inline-flex items-center justify-between px-2 py-2 text-teal-500 rounded-lg cursor-pointer hover:bg-gray-200">
                <input
                  type="checkbox"
                  className="form-checkbox focus:outline-none focus:shadow-outline"
                />
              </label>
            </th>
            {headings.map((heading, idx) => {
              return (
                <th
                  key={idx}
                  className="sticky top-0 px-6 py-2 text-xs font-bold tracking-wider text-gray-600 uppercase bg-gray-100 border-b border-gray-200"
                >
                  {heading.value}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {users.map((user: any, idx: number) => {
            return (
              <tr
                key={idx}
                className={`bg-gray-200  ${
                  idx % 2 === 1 ? "bg-opacity-20" : "bg-opacity-10"
                }   `}
              >
                <td className="px-3 border-t border-gray-200 border-dashed">
                  <label className="inline-flex items-center justify-between px-2 py-2 text-teal-500 rounded-lg cursor-pointer hover:bg-gray-200">
                    <input
                      type="checkbox"
                      className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
                    />
                  </label>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.userId}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.firstName}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.lastName}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.emailAddress}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.gender}
                  </span>
                </td>
                <td className="border-t border-gray-200 border-dashed ">
                  <span className="flex items-center px-6 py-3 text-gray-700">
                    {user.phoneNumber}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
