import { render } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const FormProviderCustomRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: Wrapper });
};

export * from "@testing-library/user-event";
