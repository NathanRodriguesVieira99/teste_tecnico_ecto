import { renderHook } from "@testing-library/react";
import {
  MakeCreateFakeUser,
  MakeCreateWrongFakeUser,
} from "@/tests/factories/make-create-fake-user";
import { SignUpServiceMock } from "@/tests/mocks/sign-up.mock";
import { customQueryClientProviderWrapper } from "@/tests/utils/QueryClient-custom-render";
import { useSignUpPageModel } from "./sign-up.model";

describe("useSignUpModel", () => {
  it("should create account", async () => {
    // instancia o mock do serviço de cadastro
    const signUpServiceMock = new SignUpServiceMock();

    /*
      renderHook para renderizar os hooks usados em useSignUpModel (useForm) e o customQueryClientProviderWrapper (para ter acesso ao useMutation)
      */
    const { result } = renderHook(
      () =>
        useSignUpPageModel({
          SignUpService: signUpServiceMock,
        }),
      { wrapper: customQueryClientProviderWrapper }
    );

    // cria um usuário fake
    const fakeUser = MakeCreateFakeUser();

    // passa os dados do usuário pra função handleSignUp
    await result.current.handleSignUp(fakeUser);

    // espera que o body da requisição (POST) seja igual ao do mock
    expect(signUpServiceMock.body).toEqual(fakeUser);
  });

  it("should throw erro on create account with wrong credentials", async () => {
    // instancia o mock do serviço de cadastro
    const signUpServiceMock = new SignUpServiceMock();

    /*
      renderHook para renderizar os hooks usados em useSignUpModel (useForm) e o customQueryClientProviderWrapper (para ter acesso ao useMutation)
      */
    const { result } = renderHook(
      () =>
        useSignUpPageModel({
          SignUpService: signUpServiceMock,
        }),
      { wrapper: customQueryClientProviderWrapper }
    );

    // cria um usuário fake
    const fakeUser = MakeCreateWrongFakeUser();

    // espera que de erro na requisição (POST)
    await expect(result.current.handleSignUp(fakeUser)).rejects.toThrow(
      "Erro ao se cadastrar!"
    );
  });
});
