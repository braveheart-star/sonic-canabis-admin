import React from "react";
import Image from "next/image";

export default function business() {
  return (
    <div>
      <div className="flex-shrink-0 mx-auto ">
        <Image
          src="/images/business/backBg.svg"
          alt="back bg"
          width={2000}
          height={1500}
        />
      </div>
    </div>
  );
}
