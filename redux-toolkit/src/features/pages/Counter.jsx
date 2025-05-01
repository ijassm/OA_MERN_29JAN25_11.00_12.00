import React from "react";
import { BiReset } from "react-icons/bi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Button } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../services/slice/counterSlice";

export const Counter = () => {
  // console.log("jfgb");

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log(count);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <section>
        <h1 className="text-7xl text-center">{count}</h1>
        <div className="flex gap-6 my-10 text-xl">
          <Button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95  hover:bg-red-600 hover:text-white rounded-sm"
            onClick={() => dispatch(decrement(1))}
          >
            <CiSquareMinus />
            Decrement
          </Button>
          <Button
            variant="outlined"
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-orange-600 hover:text-white rounded-sm"
            onClick={() => dispatch(reset())}
          >
            <BiReset />
            Reset
          </Button>
          <Button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-green-600 hover:text-white rounded-sm"
            onClick={() => dispatch(increment(count + 1))}
          >
            <CiSquarePlus />
            Increment
          </Button>
        </div>
      </section>
    </main>
  );
};
