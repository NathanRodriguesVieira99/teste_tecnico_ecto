import type { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  placeholder: string;
}

export const Input = ({
  name = "",
  placeholder = "",
  ...props
}: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      className=" pt-2"
      id={name}
      placeholder={placeholder}
      {...props}
      {...register(name)}
    />
  );
};
