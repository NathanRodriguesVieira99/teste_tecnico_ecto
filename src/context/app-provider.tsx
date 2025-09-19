import { QueryClientProvider } from "./provider/query-client-provider";

// Wrapper que engloba todos os providers em apenas um lugar
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};
