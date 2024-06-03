"use client";
import React, { useRef } from "react";
import { data } from "../data";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Store = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const filteredData = useRef(data);
  const name = searchParams.get("name") || "";
  // console.log(data);
  const handleFilter: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    const { name: key, value } = e.target;

    const params = new URLSearchParams(searchParams);

    params.set(key, value);
    const searchValue = e.target.value.toLowerCase();
    filteredData.current = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    // console.log(filteredData);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div>
        <input
          placeholder="Search"
          onChange={handleFilter}
        />
      </div>
      <div className="flex flex-wrap justify-between gap-12">
        {filteredData.current.map((item) => (
          <Link
            href={`/items/${item.id}`}
            key={item.id}
          >
            <div className="flex flex-col items-center justify-center gap-5 p-4 text-center border border-gray-400 cursor-pointer w-72 rounded-2xl">
              <h3>{item.name}</h3>
              <div className="flex justify-between w-full p-4">
                <p>{item.brand}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
