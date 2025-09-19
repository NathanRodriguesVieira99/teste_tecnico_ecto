import type { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"label"> {
  children: React.ReactNode;
}

export const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="text-main text-base pb-2 pt-4 font-semibold leading-normal"
    >
      {children}
    </label>
  );
};
