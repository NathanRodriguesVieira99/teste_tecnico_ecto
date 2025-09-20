import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

// para renderizar em componentes React
export const QueryClientCustomRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: Wrapper });
};

// para envolver código que não é componente React (passar no renderHook da React Testing Library)
export const customQueryClientProviderWrapper = Wrapper;

export * from "@testing-library/user-event";
