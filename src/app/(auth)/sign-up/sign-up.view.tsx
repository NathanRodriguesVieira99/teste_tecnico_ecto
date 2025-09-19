"use client";

import { ErrorMessage } from "@hookform/error-message";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ShowPasswordButton } from "@/components/ui/show-password-button";
import { UserIcon } from "@/components/ui/user-icon";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { TitleTextSpan } from "./_components/title-span-text";
import { TitleText } from "./_components/title-text";
import type { useSignUpPageModel } from "./sign-up.model";

export type SignUpPageViewProps = ReturnType<typeof useSignUpPageModel>;

export const SignUpPageView = (props: SignUpPageViewProps) => {
  const { methods, onSubmit } = props;

  // o mesmo hook, mas declara duas vezes para usar nos dois inputs de senha
  const passwordVisibility = usePasswordVisibility();
  const confirmPasswordVisibility = usePasswordVisibility();
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
                <Form.Label htmlFor="last_name">Sobrenome</Form.Label>
                <Form.Input
                  id="last_name"
                  name="last_name"
                  placeholder="Escreva seu sobrenome"
                  type="text"
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="last_name"
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
                    type={
                      passwordVisibility.isPasswordVisible ? "text" : "password"
                    }
                  />
                  <ShowPasswordButton
                    isVisible={passwordVisibility.isPasswordVisible}
                    onClick={passwordVisibility.toggleShowPassword}
                  />
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
                <Form.Label htmlFor="confirm_password">
                  Confirme sua senha
                </Form.Label>
                <div className="flex">
                  <Form.Input
                    className="rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="•••••••••"
                    type={
                      confirmPasswordVisibility.isPasswordVisible
                        ? "text"
                        : "password"
                    }
                  />
                  <ShowPasswordButton
                    isVisible={confirmPasswordVisibility.isPasswordVisible}
                    onClick={confirmPasswordVisibility.toggleShowPassword}
                  />
                </div>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="confirm_password"
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
