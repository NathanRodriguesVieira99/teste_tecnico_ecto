"use client";

import { ErrorMessage } from "@hookform/error-message";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ShowPasswordButton } from "@/components/ui/show-password-button";
import { UserIcon } from "@/components/ui/user-icon";
import { TitleTextSpan } from "./_components/title-span-text";
import { TitleText } from "./_components/title-text";
import type { useSignUpPageModel } from "./sign-up.model";

export type SignUpPageViewProps = ReturnType<typeof useSignUpPageModel>;

export const SignUpPageView = (props: SignUpPageViewProps) => {
  const { methods, onSubmit } = props;
  return (
    <section className="flex min-h-screen w-96 flex-col items-center justify-center overflow-auto pb-6">
      <UserIcon />

      <div className="flex flex-col items-center justify-center pt-6">
        <TitleText />
        <TitleTextSpan />
      </div>

      <div className="">
        <FormProvider {...methods}>
          <Form.Container>
            <Form.Root onSubmit={onSubmit}>
              <Form.Field>
                <Form.Label htmlFor="name">Nome</Form.Label>
                <Form.Input
                  id="name"
                  name="name"
                  placeholder="Escreva seu nome"
                  type="text"
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="name"
                  render={({ message }) => (
                    <p className="pt-2 pb-2 font-semibold text-error text-sm leading-tight">
                      {message}
                    </p>
                  )}
                />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Input
                  id="email"
                  name="email"
                  placeholder="exemplo@email.com"
                  type="email"
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="email"
                  render={({ message }) => (
                    <p className="pt-2 pb-2 font-semibold text-error text-sm leading-tight">
                      {message}
                    </p>
                  )}
                />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="phone">Telefone</Form.Label>
                <Form.Input
                  id="phone"
                  name="phone"
                  placeholder="+55 (00) 00000-0000"
                  type="phone"
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="phone"
                  render={({ message }) => (
                    <p className="pt-2 pb-2 font-semibold text-error text-sm leading-tight">
                      {message}
                    </p>
                  )}
                />
              </Form.Field>

              <Form.Field className="max-w-[327px]">
                <Form.Label htmlFor="password">Senha</Form.Label>
                <div className="flex">
                  <Form.Input
                    className="rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md"
                    id="password"
                    name="password"
                    placeholder="•••••••••"
                    type="password"
                  />
                  <ShowPasswordButton />
                </div>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="password"
                  render={({ message }) => (
                    <p className="pt-2 pb-2 font-semibold text-error text-sm leading-tight">
                      {message}
                    </p>
                  )}
                />
              </Form.Field>

              <Form.Field className="max-w-[327px]">
                <Form.Label htmlFor="confirmPassword">
                  Confirme sua senha
                </Form.Label>
                <div className="flex">
                  <Form.Input
                    className="rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="•••••••••"
                    type="password"
                  />
                  <ShowPasswordButton />
                </div>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="confirmPassword"
                  render={({ message }) => (
                    <p className="pt-2 pb-2 font-semibold text-error text-sm leading-tight">
                      {message}
                    </p>
                  )}
                />
              </Form.Field>

              <Button disabled={methods.formState.isSubmitting} type="submit">
                {methods.formState.isSubmitting
                  ? "Cadastrando..."
                  : "Cadastrar conta"}
              </Button>
            </Form.Root>
          </Form.Container>
        </FormProvider>
      </div>
    </section>
  );
};
