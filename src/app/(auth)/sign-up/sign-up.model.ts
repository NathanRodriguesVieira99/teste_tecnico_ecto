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

  const {
    mutateAsync: signUpServiceFn,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (data: SignUpServiceBody) => SignUpService.exec(data),
    onSuccess: () => {
      methods.reset();
    },
    onError: (err) => {
      err.message;
    },
  });

  const handleSignUp = async (data: SignUpSchema) => {
    await signUpServiceFn(data);
  };

  const onSubmit = handleSubmit(handleSignUp);

  return {
    methods,
    onSubmit,
    isSubmitting,
    errors,
    handleSignUp,
    isError,
    isSuccess,
  };
};
