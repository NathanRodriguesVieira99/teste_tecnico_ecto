import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  type: "button" | "reset" | "submit";
}

export const Button = ({
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button type={type} {...props} className="cursor-pointer">
      {children}
    </button>
  );
};
