import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  placeholder: string;
}

/*
TODO -> Adicionar React Hook Form 
*/
export const Input = ({
  name = "",
  placeholder = "",
  ...props
}: InputProps) => {
  return <input className=" pt-2" id={name} placeholder={placeholder} {...props} />;
};
