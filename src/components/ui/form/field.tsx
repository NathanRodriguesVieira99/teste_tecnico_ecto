import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface FieldProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  classname?: string;
}

export const Field = ({ children, className, ...props }: FieldProps) => {
  return (
    <div {...props} className={twMerge("flex flex-col", className)}>
      {children}
    </div>
  );
};
