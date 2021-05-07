import React, { useState } from "react";
import useSWR from "swr";

import storage from "../utils/storage";
import Pagination from "./Pagination";
import { DemoTable } from "./Table";
import productApi from "../lib/productApi";

export const PaginatedProductTable = () => {
  const { data: token } = useSWR("accessToken", storage);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data } = useSWR(
    [`/api/product/user/?page=${currentPage}&limit=${pageSize}`, token],
    productApi.getProductsByUser
  );

  function handlePageChange(page: any): void {
    setCurrentPage(page);
  }

  function handlePageSizeChange(pageSize: any): void {
    setPageSize(pageSize);
  }

  return (
    <div className="">
      <DemoTable tableData={data} />
      <div className="mt-4 ">
        <Pagination
          // total items
          itemsCount={data?.data?.meta?.totalItems}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};
