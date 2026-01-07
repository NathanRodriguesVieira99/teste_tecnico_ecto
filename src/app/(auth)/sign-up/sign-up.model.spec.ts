import { waitFor } from "@testing-library/react";
import {
  MakeCreateFakeUser,
  MakeCreateWrongFakeUser,
} from "@/tests/factories/make-create-fake-user";
import { setupHook } from "@/tests/utils/setup-hook";

describe("useSignUpModel", () => {
  it("should create account", async () => {
    const { result, signUpServiceMock } = setupHook(); // renderiza o hook para ter acesso aos métodos de useSignUpModel()

    // cria um usuário fake
    const fakeUser = MakeCreateFakeUser();

    // executa a função handleSignUp e atualiza o estado
    await waitFor(async () => {
      await result.current.handleSignUp(fakeUser);
    });

    await waitFor(() => {
      // espera que o body da requisição (POST) seja igual ao do mock
      expect(signUpServiceMock.body).toEqual(fakeUser);
      // espera que retorne sucesso do React Query
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it("should throw erro on create account with wrong credentials", async () => {
    const { result } = setupHook(); // renderiza o hook para ter acesso aos métodos de useSignUpModel()

    // cria um usuário fake
    const fakeUser = MakeCreateWrongFakeUser();

    // espera que de erro ao tentar cadastrar um usuário (método POST)
    await expect(result.current.handleSignUp(fakeUser)).rejects.toThrow(
      "Erro ao se cadastrar!"
    );

    // espera que retorne erro do React Query
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });
});
