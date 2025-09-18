import { Form } from "@/components/ui/form";
import { UserIcon } from "@/components/ui/user-icon";

export default function SignUpPage() {
  return (
    <section className="flex w-96 flex-col items-center justify-center pb-6">
      <UserIcon />

      <div className=" flex flex-col items-center justify-center pt-6">
        <h1 className="text-main font-bold text-3xl ">Criar nova conta</h1>
        <span className="text-sub text-center text-base font-normal leading-normal pt-6 pb-6">
          Preencha os campos do formulário abaixo para criar uma conta na Ecto
          Tools:
        </span>
      </div>

      <div>
        <Form.Container>
          <Form.Root>
            <Form.Field>
              <Form.Label>Nome</Form.Label>
              <Form.Input name="name" placeholder="Escreva seu nome" />
            </Form.Field>
          </Form.Root>
        </Form.Container>
      </div>
    </section>
  );
}
