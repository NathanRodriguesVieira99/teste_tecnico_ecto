import type { ISignUpService, SignUpServiceBody } from "@/services/sign-up";

export class SignUpServiceMock implements ISignUpService {
  body?: SignUpServiceBody;

  // biome-ignore lint/suspicious/useAwait: não precisa do await
  async exec(body: SignUpServiceBody) {
    if (
      // biome-ignore lint/complexity/useSimplifiedLogicExpression: não é necessário
      !body ||
      !body.name ||
      !body.last_name ||
      !body.email ||
      !body.phone ||
      !body.password ||
      !body.confirm_password
    ) {
      throw new Error("Erro ao se cadastrar!");
    }

    this.body = body;

    return Promise.resolve();
  }
}
