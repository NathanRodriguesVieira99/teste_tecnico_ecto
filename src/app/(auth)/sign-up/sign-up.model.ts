"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import type { SignUpServiceBody } from "@/services/sign-up";
import { type SignUpSchema, signUpSchema } from "./sign-up.schema";
import type { SignUpServiceProps } from "./sign-up.types";

export const useSignUpPageModel = ({ SignUpService }: SignUpServiceProps) => {
  const methods = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const { mutateAsync: signUpServiceFn } = useMutation({
    mutationFn: (data: SignUpServiceBody) => SignUpService.exec(data),
  });

  const handleSignUp = async (data: SignUpSchema) => {
    try {
      await signUpServiceFn({
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirm_password: data.confirm_password,
      });

      // biome-ignore lint/suspicious/noConsole: apenas para exibir o retorno.
      console.log("Dados enviados: ", data);
    } catch {
      // biome-ignore lint/suspicious/noConsole: apenas para ter algo no catch.
      console.error("Erro ao se cadastrar!");
    }

    // limpa o input após o cadastro
    methods.reset();
  };

  const onSubmit = handleSubmit(handleSignUp);

  return { methods, onSubmit, isSubmitting, errors };
};
