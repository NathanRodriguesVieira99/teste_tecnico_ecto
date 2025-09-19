"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type SignUpSchema, signUpSchema } from "./sign-up.schema";

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
    const TIMEOUT_SECONDS = 2000;
    await new Promise((resolver) => setTimeout(resolver, TIMEOUT_SECONDS));
    // biome-ignore lint/suspicious/noConsole: é temporário
    console.log(data);

    // limpa o input após o cadastro
    methods.reset();
  };

  const onSubmit = handleSubmit(handleSignUp);

  return { methods, onSubmit, isSubmitting, errors };
};
