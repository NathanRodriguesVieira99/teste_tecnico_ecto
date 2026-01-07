import { renderHook } from "@testing-library/react";
import { SignUpServiceMock } from "../mocks/sign-up.mock";
import { useSignUpPageModel } from "@/app/(auth)/sign-up/sign-up.model";
import { customQueryClientProviderWrapper } from "./QueryClient-custom-render";

export const setupHook = () => {
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

    return { signUpServiceMock, result };
  };
