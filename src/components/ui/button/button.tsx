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
    <div className="w-full z-20  pt-6 flex items-center justify-center">
      <button
        type={type}
        {...props}
        className="cursor-pointer h-12 w-full  px-6 bg-primary rounded-md justify-center items-center gap- hover:bg-secondary disabled:cursor-not-allowed text-white disabled:bg-primary disabled:opacity-40"
      >
        {children}
      </button>
    </div>
  );
};
