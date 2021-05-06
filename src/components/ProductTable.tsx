import React, { useEffect, useState } from "react";
import { slice, take } from "lodash";
import { UserTable } from "./UserTable";
import Pagination from "./Pagination";

const mockData = [
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
  {
    userId: "1232",
    firstName: "brother",
    lastName: "hello",
    emailAddress: "ehoter@gmail.com",
    gender: "male",
    phoneNumber: "here",
  },
];

function pagination(items: any, pageNumber: any, pageSize: any) {
  const startIndex = (pageNumber - 1) * pageSize;
  return take(slice(items, startIndex), pageSize);
}

export const MockPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [paginatedData, setDataPagination] = useState([]);

  function handlePageChange(page: any): void {
    setCurrentPage(page);
  }

  function handlePageSizeChange(pageSize: any): void {
    setPageSize(pageSize);
  }

  useEffect(() => {
    const temp: any = pagination(mockData, currentPage, pageSize);
    setDataPagination(temp);
  }, [mockData, pageSize, currentPage]);

  return (
    <div className="">
      <UserTable users={paginatedData} />
      <div className="mt-4 ">
        <Pagination
          itemsCount={mockData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};
