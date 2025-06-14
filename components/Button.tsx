import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button
      className={twMerge(
        " inline-flex h-11 px-6 rounded-lg border border-red-orange uppercase items-center gap-2 ",
        className,
        variant === "primary" && "btn-red-orange",
        variant === "secondary" && "",
        variant === "text" && " h-auto px-0 border-transparent"
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
