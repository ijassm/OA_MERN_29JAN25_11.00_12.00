import React from "react";
import { BiReset } from "react-icons/bi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Button } from "../components";

export const Counter = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section>
        <h1 className="text-7xl text-center">{1}</h1>
        <div className="flex gap-6 my-10 text-xl">
          <Button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95  hover:bg-red-600 hover:text-white rounded-sm"
            // onClick={decrementHandle}
          >
            <CiSquareMinus />
            Decrement
          </Button>
          <Button
            variant="outlined"
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-orange-600 hover:text-white rounded-sm"
            // onClick={resetHandle}
          >
            <BiReset />
            Reset
          </Button>
          <Button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-green-600 hover:text-white rounded-sm"
            // onClick={incrementHandle}
          >
            <CiSquarePlus />
            Increment
          </Button>
        </div>
      </section>
    </main>
  );
};
