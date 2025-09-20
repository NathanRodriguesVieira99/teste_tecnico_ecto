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
    <div className="z-20 flex w-full items-center justify-center pt-6">
      <button
        type={type}
        {...props}
        className="gap- h-12 w-full cursor-pointer items-center justify-center rounded-md bg-primary px-6 text-white hover:bg-secondary disabled:cursor-not-allowed disabled:bg-primary disabled:opacity-40"
      >
        {children}
      </button>
    </div>
  );
};
