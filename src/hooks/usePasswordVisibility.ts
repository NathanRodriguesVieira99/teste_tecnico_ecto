import { useState } from "react";

export const usePasswordVisibility = () => {
  // gerencia o estado de exibição da senha (começa com false, ou seja, oculto)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // alterna entre true e false (visível/oculto)
  const toggleShowPassword = () => setIsPasswordVisible((prev) => !prev);

  return { isPasswordVisible, toggleShowPassword };
};
