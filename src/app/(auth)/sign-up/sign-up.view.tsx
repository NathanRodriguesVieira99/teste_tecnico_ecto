"use client";

import { Form } from "@/components/ui/form";
import { UserIcon } from "@/components/ui/user-icon";
import type { useSignUpPageModel } from "./sign-up.model";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { TitleText } from "./_components/title-text";
import { TitleTextSpan } from "./_components/title-span-text";

export type SignUpPageViewProps = ReturnType<typeof useSignUpPageModel>;

export const SignUpPageView = (props: SignUpPageViewProps) => {
  const { methods, onSubmit } = props;
  return (
    <section className="flex w-96 flex-col items-center justify-center pb-6">
      <UserIcon />

      <div className=" flex flex-col items-center justify-center pt-6">
        <TitleText />
        <TitleTextSpan />
      </div>

      <div>
        <FormProvider {...methods}>
          <Form.Container>
            <Form.Root onSubmit={onSubmit}>
              <Form.Field>
                <Form.Label htmlFor="name">Nome</Form.Label>
                <Form.Input
                  id="name"
                  placeholder="Escreva seu nome"
                  name="name"
                  type="text"
                />
              </Form.Field>

              <Button type="submit" disabled={methods.formState.isSubmitting}>
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
