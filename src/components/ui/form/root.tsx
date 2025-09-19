import type { ComponentProps } from "react";

interface RootProps extends ComponentProps<"form"> {
  children: React.ReactNode;
}

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <form
      className="flex flex-col items-center justify-center"
      {...props}
    >
      {children}
    </form>
  );
};
