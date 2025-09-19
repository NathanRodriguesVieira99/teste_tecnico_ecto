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
      id={name}
      placeholder={placeholder}
      className={twMerge(
        'w-[327px] h-10 px-4 py-2 bg-white rounded-md  placeholder:text-sub placeholder:text-base placeholder:font-normal placeholder:leading-normal outline-soft outline-1 outline-offset-[-1px] items-center gap-2 justify-start focus:outline-primary hover:outline-sub"',
        className
      )}
      {...props}
      {...register(name)}
    />
  );
};
