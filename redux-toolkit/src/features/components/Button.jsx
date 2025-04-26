import clsx from "clsx";
import React from "react";

export const Button = ({
  className,
  variant = "filled",
  children,
  ...props
}) => {
  const variants = {
    filled: "hover:bg-amber-400 text-black",
    outlined: "border-2 bg-transparent",
    text: "bg-transparent hover:underline",
  };

  return (
    <button
      className={clsx(
        "w-full py-2 active:scale-[0.9] my-4 cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
