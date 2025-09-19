"use client";

import { QueryClientProvider as Provider } from "@tanstack/react-query";
import { client } from "@/lib/react-query";

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider client={client}>{children}</Provider>;
};
