import React from "react";

const CheckoutItem = ({ item }) => {
  const {
    name = "JUDUL",
    price = 1,
    quantity = 2,
    imageUrl = "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  } = item;

  return (
    <div className="flex justify-between h-56 m-4 pt-4">
      <div className="w-1/5 pl-10">
        <img src={imageUrl} alt="Item" className="h-full" />
      </div>

      <div className="flex flex-col justify-between w-2/5 text-xl">
        <div className="text-3xl">{name}</div>
        <div className="text-gray-500">{description}</div>
        <div className="text-2xl">
          Kuantitas {quantity} x Rp {price}.000
        </div>
      </div>
      <div className="flex flex-col justify-end justify-aroundtext-3xl w-1/5">
        Rp {quantity * price}.000
      </div>
    </div>
  );
};

export default CheckoutItem;
