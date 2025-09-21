import type { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  placeholder: string;
  className?: string;
}

export const Input = ({
  name = "",
  placeholder = "",
  className,
  ...props
}: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      className={twMerge(
        'h-10 w-[327px] items-center justify-start gap-2 rounded-md bg-white px-4 py-2 outline-1 outline-soft outline-offset-[-1px] placeholder:font-normal placeholder:text-base placeholder:text-sub placeholder:leading-normal hover:outline-sub" focus:outline-primary lg:w-[592px]',
        className
      )}
      id={name}
      placeholder={placeholder}
      {...props}
      {...register(name)}
    />
  );
};
