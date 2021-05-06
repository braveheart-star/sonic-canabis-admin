import React from "react";
import { DemoTable } from "./Table";

const tableHeader = [
  { path: "id", label: "id" },
  { path: "time", label: "time" },
  { path: "orders", label: "orders" },
  { path: "amount", label: "amount" },
  { path: "amount", label: "amount" },
];

export const UserTable = (props: any) => {
  const { users } = props;

  return (
    <div>
      <DemoTable users={users} />
    </div>
  );
};
