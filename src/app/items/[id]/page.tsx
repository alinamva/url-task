import { data } from "@/app/data";
import Image from "next/image";
import React from "react";

const Item = ({ params }: { params: { id: number } }) => {
  const item = data.find((item) => item.id == params.id);
  if (!item) {
    return "No item found";
  }
  return (
    <div className="flex gap-4">
      <Image
        src={item.image}
        width={400}
        height={700}
        alt="item"
        className="rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2>{item.name}</h2>
          <label>Category: {item.category}</label>
          <p>
            Description <br />
            {item.description}
          </p>
        </div>
        <div className="flex justify-between justify-self-end">
          <div className="flex flex-col gap-3">
            <span>Rating: {item.rating}</span>
            <span>Reviews: {item.reviews}</span>
          </div>
          <span className="text-3xl">{item.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
