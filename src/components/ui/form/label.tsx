import type { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"label"> {
  children: React.ReactNode;
}

export const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="pt-4 pb-2 font-semibold text-base text-main leading-normal"
    >
      {children}
    </label>
  );
};
