import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const OrderListItem = ({ name, price, initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="font-poppins w-full">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <RiDeleteBin6Line className="text-[#FF3838] text-2xl cursor-pointer" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-5 text-[16.62px]">
          <button
            className="py-2 px-4 text-[#FF3838] rounded-full shadow-custom"
            onClick={handleDecrement}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="py-2 px-4 text-[#3FC66E] rounded-full shadow-custom"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <h3 className="text-2xl text-[#FF8A00]">{price}</h3>
      </div>
    </div>
  );
};

export default OrderListItem;