"use client";

import { useForm } from "react-hook-form";
import { signUpSchema, type SignUpSchema } from "./sign-up.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignUpPageModel = () => {
  const methods = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const handleSignUp = async (data: SignUpSchema) => {
    // TODO -> implementar lógica de SignUp
    await new Promise((resolver) => setTimeout(resolver, 2000));
    console.log(data);

    // limpa o input após o cadastro
    methods.reset();
  };
  
  const onSubmit = handleSubmit(handleSignUp);

  return { methods, onSubmit, isSubmitting, errors };
};
